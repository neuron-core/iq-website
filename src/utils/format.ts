const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

/** A small count written out, as the copy does: 3 → "three". */
export function numberWord(count: number): string {
  return NUMBER_WORDS[count] ?? String(count);
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** "a, b and c" or "a, b or c": the site writes lists without a serial comma. */
export function formatList(items: readonly string[], type: 'and' | 'or' = 'and'): string {
  return new Intl.ListFormat('en-GB', { type: type === 'and' ? 'conjunction' : 'disjunction' }).format(items);
}

/** 1500000 → "1.5M", or "1.5 million" when `long`. */
export function compactNumber(value: number, long = false): string {
  return new Intl.NumberFormat('en', { notation: 'compact', compactDisplay: long ? 'long' : 'short' }).format(value);
}

/** A heading id from its text: "The PHP opportunity" → "the-php-opportunity". */
export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
