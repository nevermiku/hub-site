import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const output = join(root, "dist");
const excluded = new Set([
  ".git",
  "node_modules",
  "dist",
  "hub-app",       // Contains projecthub.wgt (37 MiB); keep it in GitHub, not in the website bundle.
  "build.mjs",
  "package.json"
]);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const entry of await readdir(root, { withFileTypes: true })) {
  if (excluded.has(entry.name)) continue;
  await cp(join(root, entry.name), join(output, entry.name), {
    recursive: true,
    dereference: true
  });
}

console.log("Static site prepared in ./dist (hub-app package excluded; source remains in GitHub).");
