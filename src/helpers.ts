const { random, floor, round } = Math;

/* =====  CONSTANTS  ===== */
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
export const SYMBOLS = '=+-^?!%&*$#^@|';
export const AMBIGUOUS = '(){}[]/~;:.<>';

const SYMBOLS_EXTENDED = SYMBOLS + AMBIGUOUS;
const regexpSYMBOLS = '\\' + SYMBOLS_EXTENDED.split('').join('\\');
const ALL = '\\w' + regexpSYMBOLS;

/* =====  Helper functions  ===== */
const yesOrNo = () => random() < 0.5;

const getRandomCharFromSet = (set: string) => set.charAt(floor(random() * set.length));

const getRandomIntBetween = (min: number, max: number) => floor(random() * (max - min + 1) + min);

const range = (n: number): undefined[] => [...Array(n)];

const isLetter = (char: string) => /[a-zA-Z]/.test(char);
const isLowerCaseLetter = (char: string) => /[a-z]/.test(char);
const isUpperCaseLetter = (char: string) => /[A-Z]/.test(char);
const isNumber = (char: string) => /\d/.test(char);
const isSymbol = (char: string) => SYMBOLS_EXTENDED.includes(char);

/**
 * Shuffles an array's items (Fisher-Yates Shuffle)
 * @param {[string|number|symbol]} a The array to shuffle.
 */
export function shuffle(a: Array<string | number | symbol>) {
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const randIndex = floor(random() * (i + 1));
    [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
  }
  return arr;
}

export function pickDigits(n: number) {
  return range(n).map(() => getRandomIntBetween(0, 9));
}

export function pickSymbols(n: number, useAmbiguousSymbols: boolean) {
  return range(n).map(() =>
    getRandomCharFromSet(
      !useAmbiguousSymbols ? SYMBOLS : SYMBOLS.concat(AMBIGUOUS),
    ),
  );
}

function pickAmbiguous(n: number) {
  return range(n).map(() => getRandomCharFromSet(AMBIGUOUS));
}

export function pickLetters(n: number) {
  return range(n).map(() => {
    const shouldApplyUpperCase = yesOrNo();
    return shouldApplyUpperCase
      ? getRandomCharFromSet(LETTERS).toUpperCase()
      : getRandomCharFromSet(LETTERS);
  });
}

export function countLetters(str: string) {
  return (str.match(/[a-zA-Z]/g) || []).length;
}

export function countUppercaseLetters(str: string) {
  return (str.match(/[A-Z]/g) || []).length;
}

export function countNumbers(str: string) {
  return (str.match(/\d/g) || []).length;
}

export function countSymbols(str: string) {
  const pattern = new RegExp('[' + regexpSYMBOLS + ']', 'g');
  return (str.match(pattern) || []).length;
}

// ***** count consecutives *****

// case of any consecutive of same type (ex: 83 or xu or AP or :;) including overlapping chars
// n is number of consecutiveness
export function countConsecutiveSameType(str: string) {
  return str.split('').reduce((count, char, i) => {
    const condition = (
      (isLowerCaseLetter(char) && isLowerCaseLetter(str[i - 1])) ||
      (isUpperCaseLetter(char) && isUpperCaseLetter(str[i - 1])) ||
      (isNumber(char) && isNumber(str[i - 1])) ||
      (isSymbol(char) && isSymbol(str[i - 1]))
    );
    return count + (i !== 0 && condition ? 1 : 0);
  }, 0);
}

// case of repetitions of same char (ex: 22 or ff or MM or %%)
export function countRepeatedChar(str: string) {
  const pattern = new RegExp('([' + ALL + '])\\1*', 'g');
  return (str.match(pattern) || []).reduce((count, repetition) => count + (repetition.length - 1), 0);
}

// case of sequential (forward and reverse) (ex: 34 or kJ)
export function countSequentialForward(str: string) {
  return str.split('').reduce((count, char, i) => {
    const condition = i !== 0 && (
      (isLetter(char) && isLetter(str[i - 1]) &&
      str[i - 1].toLowerCase() === LETTERS[LETTERS.indexOf(char.toLowerCase()) - 1]) ||
      (isNumber(char) && isNumber(str[i - 1]) && Number(str[i - 1]) === Number(char) - 1)
    );
    return count + (condition ? 1 : 0);
  }, 0);
}

export function countSequentialReverse(str: string) {
  return str.split('').reduce((count, char, i) => {
    const condition = i !== 0 && (
      (isLetter(char) && isLetter(str[i - 1]) &&
      str[i - 1].toLowerCase() === LETTERS[LETTERS.indexOf(char.toLowerCase()) + 1]) ||
      (isNumber(char) && isNumber(str[i - 1]) && Number(str[i - 1]) === Number(char) + 1)
    );
    return count + (condition ? 1 : 0);
  }, 0);
}
