// one-line-big-laugh-328fb857: one funny line, capped at 200 characters.
// The program writes that single line to /output/entry.txt, where the
// gate reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke turns on asking an AI to write a will: the AI bequeaths
// everything to the cloud — and the narrator along with it. The punch
// lands on the last two words ("including me"), and the line is plain
// ASCII apart from the em dash, so it reads smoothly aloud.
const LINE =
  'I asked the AI to write my will. It left everything to the cloud — including me.';

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-200`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
