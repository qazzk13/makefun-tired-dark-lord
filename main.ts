process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Tired Dark Lord — first draft. Varek the Black, mid-speech,
// losing his place. The tiredness is in the pauses and the cold cup,
// never announced.
const TEXT =
  "You came at a bad hour. I had words ready for you, grand ones, in my coat. The black coat. Where was I. Forty nights I have held Alder Ford, starved its mills, raised its dead, and no hero has made me stand this long. Sit. No, I will sit. My cup is cold. My captains wait below for orders I may have sent at noon. At dawn the dam breaks and your town is mine, speech or none. Go home, boy. Tell them Varek the Black was tall, and cruel, and wide awake.";

const words = TEXT.split(/\s+/).filter(Boolean).length;
if (words < 90 || words > 110) {
  throw new Error(`entry must be about 100 words, got ${words}`);
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
