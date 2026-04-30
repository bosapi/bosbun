import { spawn } from "bun";
import { loadEnv } from "../core/env.ts";
import { BOSIA_NODE_PATH } from "../core/paths.ts";

export async function runTest(args: string[]) {
	loadEnv("test");

	if (!process.env.BOSIA_ENV) process.env.BOSIA_ENV = "test";
	if (!process.env.NODE_ENV) process.env.NODE_ENV = "test";

	const proc = spawn(["bun", "test", ...args], {
		stdout: "inherit",
		stderr: "inherit",
		cwd: process.cwd(),
		env: {
			...process.env,
			BOSIA_ENV: process.env.BOSIA_ENV,
			NODE_ENV: process.env.NODE_ENV,
			NODE_PATH: BOSIA_NODE_PATH,
		},
	});

	const code = await proc.exited;
	process.exit(code);
}
