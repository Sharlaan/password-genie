import { Settings } from './App.vue';

const { random, floor, round } = Math;

/**
 * Generate a word of length N, with duplicates
 * (Assumes settings.digits + settings.symbols <= settings.length)
 * @param {Object} settings password generation parameters
 * @param {number} settings.length Length of the generated password
 * @param {number} settings.digits Number of digits the generated password must contain
 * @param {number} settings.symbols Number of symbols the generated password must contain
 * @param {boolean} settings.ambiguous Number of letters the generated password must contain
 * @return {string}
 */
export default ({ length, digits, symbols, ambiguous }: Settings): string => {
  const letters = length - digits - symbols;
  return shuffle([
    ...pickDigits(digits),
    ...pickSymbols(symbols, ambiguous),
    ...pickLetters(letters),
  ]).join('');
};

/* =====  CONSTANTS  ===== */
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
// ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
export const SYMBOLS = '=+-^?!%&*$#^@|';
// [ '=','+','-','^','?','!','%','&','*','$','#','^','@','|'];
export const AMBIGUOUS = '(){}[]()/~;:.<>';
// ["(",")","{","}","[","]","(",")","/","~",";",":",".","<",">"];

/* =====  Helper functions  ===== */
const yesOrNo = () => random() < 0.5;

const getRandomCharFromSet = (set: string) => set.charAt(floor(random() * set.length));

const getRandomIntBetween = (min: number, max: number) => floor(random() * (max - min + 1) + min);

const range = (n: number): undefined[] => [...Array(n)];

/**
 * Shuffles an array's items (Fisher-Yates Shuffle)
 * @param {[string|number|symbol]} a The array to shuffle.
 */
function shuffle(a: Array<string | number | symbol>) {
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const randIndex = floor(random() * (i + 1));
    [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
  }
  return arr;
}

function pickDigits(n: number) {
  return range(n).map(() => getRandomIntBetween(0, 9));
}

function pickSymbols(n: number, useAmbiguousSymbols: boolean) {
  return range(n).map(() =>
    getRandomCharFromSet(
      !useAmbiguousSymbols ? SYMBOLS : SYMBOLS.concat(AMBIGUOUS),
    ),
  );
}

function pickAmbiguous(n: number) { return range(n).map(() => getRandomCharFromSet(AMBIGUOUS)); }

function pickLetters(n: number) {
  return range(n).map(() => {
    const shouldApplyUpperCase = yesOrNo();
    return shouldApplyUpperCase
      ? getRandomCharFromSet(LETTERS).toUpperCase()
      : getRandomCharFromSet(LETTERS);
  });
}
