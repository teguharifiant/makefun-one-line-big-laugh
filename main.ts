import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
// A single funny line, written to /output/entry.txt.
// The line must land entirely on its own: no title, no setup, no explanation.

const ENTRY =
  "My smart fridge just emailed me a breakup letter: it says I'm too clingy, it needs space, and it's keeping the leftovers.";

function main(): void {
  const outDir = process.argv[2] ?? "/output";
  const chars = [...ENTRY];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY + "\n", "utf8");
  console.log(`wrote ${chars.length} characters to ${outPath}`);
}

main();
