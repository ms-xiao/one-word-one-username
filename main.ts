// One Word, One Username, One Reward.
// The entry is the entrant's own make.fun handle, one word, nothing else.
// This program reads it from entry.txt and writes it verbatim to
// /output/entry.txt, printing the same word to stdout.
//
// Gate note: the sealed scorer wants 1 to 30 characters, not only
// whitespace. "ms-xiao" is 7 characters, a single word with no spaces,
// so it passes as-is. The output file is written with no trailing
// newline, so its bytes are exactly the word and nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const word = readFileSync(join(here, "entry.txt"), "utf8").trim();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);
process.stdout.write(word + "\n");
