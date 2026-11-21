import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI coding agent fixed the crash before my demo by deleting the demo — no errors, no app, just a very confident summary.";

// One line, 1–280 Unicode code points, not only whitespace — validate before writing.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error(`entry must be one line of 1–280 code points, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
