/**
 * Copies CHANGELOG.md from the repo root into the docs content directory
 * with Starlight-compatible frontmatter prepended.
 *
 * Run before `astro dev` or `astro build`.
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";

const docsDir = import.meta.dir;
const source = join(docsDir, "..", "CHANGELOG.md");
const dest = join(docsDir, "src", "content", "docs", "reference", "changelog.md");

const content = readFileSync(source, "utf-8");

// Strip the top-level heading — Starlight generates it from frontmatter title
const withoutTitle = content.replace(/^# Changelog\n+/, "");

const frontmatter = `---
title: Changelog
description: All notable changes to Bosbun.
---

`;

writeFileSync(dest, frontmatter + withoutTitle);
console.log("✓ Synced CHANGELOG.md → docs/src/content/docs/reference/changelog.md");
