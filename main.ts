process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Tired Dark Lord — Varek the Black, nine years into a siege,
// mid-speech and losing his place. The tiredness is in the pauses,
// the cold soup and the orders given twice, never announced.
const TEXT =
  "Sit down. No, stand. Heroes stand, I think. I had a speech for this. Nine years I kept the siege of Alder Ford, starved its mills, raised its dead twice, and wrote you a fine speech. It is in my coat. My other coat. Boy, my hand shakes on this cup, my soup went cold at noon, and my generals wait downstairs for orders I gave them twice already. At dawn I flood the ford and take your town anyway. That bit I recall. Now run home, tell them you faced Varek the Black, and leave my old chair empty.";

const words = TEXT.split(/\s+/).filter(Boolean).length;
if (words !== 100) {
  throw new Error(`entry must be exactly 100 words, got ${words}`);
}
if (TEXT.length < 1 || TEXT.length > 600) {
  throw new Error(`entry must be 1-600 characters, got ${TEXT.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be blank");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT + "\n");
