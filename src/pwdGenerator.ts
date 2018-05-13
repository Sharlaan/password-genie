import { Settings } from '@/types';
import { shuffle, pickDigits, pickLetters, pickSymbols } from '@/helpers';

/**
 * Generate a word of length N, with duplicates
 * (Assumes settings.digits + settings.symbols <= settings.length)
 * @param {number} [settings.length=8] - Length of the generated password
 * @param {number} [settings.digits=4] - Number of digits the generated password must contain
 * @param {number} [settings.symbols=2] - Number of symbols the generated password must contain
 * @param {boolean} [settings.ambiguous=true] - Number of letters the generated password must contain
 * @return {string}
 */
export default function pwdGenerator({ length = 8, digits = 4, symbols = 2, ambiguous = true }): string {
  if (length < digits + symbols) {
    throw new Error('DIGITS + SYMBOLS should be lower than total LENGTH !');
  }
  const letters = length - digits - symbols;
  return shuffle([
    ...pickDigits(digits),
    ...pickSymbols(symbols, ambiguous),
    ...pickLetters(letters),
  ]).join('');
}
