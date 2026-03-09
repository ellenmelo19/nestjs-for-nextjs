/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { generateRandomSuffix } from './generate-random-suffix';
import { slugify } from './slugify';
export function createSlugFromText(text: string) {
  const slug = slugify(text);
  return `${slug}-${generateRandomSuffix()}`;
}
