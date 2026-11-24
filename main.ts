import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
const entry = "For nine years the night-bus driver ferried strangers through mountain fog, and tonight the depot board lists his village first, in his own handwriting.";
const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = resolve(outDir, "entry.txt");
try { mkdirSync(outDir, { recursive: true }); } catch {}
writeFileSync(entryPath, entry);
