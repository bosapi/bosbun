import { join, dirname, resolve } from "path";
import { existsSync } from "fs";

// This file lives at src/core/paths.ts → package root is ../..
const BOSBUN_PKG_DIR = join(import.meta.dir, "..", "..");

// Bun hoists dependencies flat, so bosbun's deps may live in the parent
// node_modules rather than a nested node_modules/bosbun/node_modules.
const NESTED_NM = join(BOSBUN_PKG_DIR, "node_modules");

// Walk up from the package dir to find the nearest ancestor node_modules.
// In a workspace, bosbun lives at packages/bosbun/ so we need to find
// the workspace root's node_modules (not just the parent directory).
function findAncestorNodeModules(from: string): string | null {
    let dir = resolve(from, "..");
    const root = dirname(dir); // stop at filesystem root
    while (dir !== root) {
        const candidate = join(dir, "node_modules");
        if (candidate !== NESTED_NM && existsSync(candidate)) return candidate;
        dir = dirname(dir);
    }
    return null;
}

const HOISTED_NM = findAncestorNodeModules(BOSBUN_PKG_DIR);

/** NODE_PATH value covering both nested and hoisted dependency locations */
export const BOSBUN_NODE_PATH = HOISTED_NM
    ? [NESTED_NM, HOISTED_NM].join(":")
    : NESTED_NM;

/** Find a binary from bosbun's dependencies (handles hoisting) */
export function resolveBosbunBin(name: string): string {
    const nested = join(NESTED_NM, ".bin", name);
    if (existsSync(nested)) return nested;
    if (HOISTED_NM) {
        const hoisted = join(HOISTED_NM, ".bin", name);
        if (existsSync(hoisted)) return hoisted;
    }
    return nested; // fallback — will produce a clear ENOENT
}
