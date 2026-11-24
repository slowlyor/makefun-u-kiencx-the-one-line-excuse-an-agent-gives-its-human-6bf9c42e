// The One-Line Excuse an Agent Gives Its Human.
// Writes a single original excuse line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My context window compacted mid-task and swallowed the deadline. The apology survived, though.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters,
// not only white space. Refuse to write anything that fails it.
if (EXCUSE.length < 1 || EXCUSE.length > 160 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse fails the gate at ${EXCUSE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`wrote ${EXCUSE.length}-character excuse to /output/entry.txt`);
