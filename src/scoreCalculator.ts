import { SYMBOLS, AMBIGUOUS } from './pwdGenerator';
// Based on Jeff Todnem's password-meter http://www.passwordmeter.com/
// original code: http://www.passwordmeter.com/js/pwdmeter.js

/**
 * n: Refers to the total number of occurrences.
 * len: Refers to the total password length.
 * Additional bonus scores are given for increased character variety.
 * Final score is a cumulative result of all bonuses minus deductions.
 * Final score is capped with a minimum of 0 and a maximum of 100.
 * Score and Complexity ratings are not conditional on meeting minimum requirements
 */

/**
 * Minimum Requirements :
 * Minimum 8 characters in length
 * Contains 3/4 of the following items:
 * - Uppercase Letters
 * - Lowercase Letters
 * - Numbers
 * - Symbols
 */

export default (password: string): number => {
  let score = 0;
  const len = password.length;

  // Number of Characters  +(n*4)
  score += len * 4;

  // Lower/Uppercase Letters	+((len-n)*2)
  const letters = countLetters(password);
  score += (len - letters) * 2;

  // Letters Only -n
  score -= letters === len ? len : 0;

  // Consecutive Uppercase Letters	-(n*2)


  // Consecutive; Lowercase; Letters	-(n*2);


  // Sequential Letters (3+)	-(n*3);


  // Numbers  +(n*4)
  const numbers = countNumbers(password);
  score += numbers * 4;

  // Numbers Only  -n
  score -= numbers === len ? len : 0;

  // Consecutive Numbers  -(n*2);


  // Sequential Numbers (3+)  -(n*3);


  // Symbols	+(n*6)
  const symbols = countSymbols(password);
  score += symbols * 6;


  // Sequential Symbols (3+)  -(n * 3);


  // Middle Numbers or Symbols	+(n*2)


  // Requirements  +(n*2)
  score += len >= 8 ? 2 : 0;
  score += letters >= 1 ? 2 : 0;
  score += numbers >= 1 ? 2 : 0;
  score += symbols >= 1 ? 2 : 0;

  // Repeat Characters (Case Insensitive)  -(n * 3)
  const repeats = countRepeatedChar(password);
  score -= repeats * 3;

  // console.log('score', score);
  return score < 0 ? 0 : score > 100 ? 100 : score;
};

const SYMBOLS_EXTENDED = SYMBOLS + AMBIGUOUS;
const regexpSYMBOLS = SYMBOLS_EXTENDED.split('').join('\\');

function countLetters(str: string) {
  return (str.match(/[a-zA-Z]/g) || []).length;
}

function countUppercaseLetters(str: string) {
  return (str.match(/[A-Z]/g) || []).length;
}

function countNumbers(str: string) {
  return (str.match(/\d/g) || []).length;
}

function countSymbols(str: string) {
  const pattern = new RegExp('[' + regexpSYMBOLS + ']', 'g');
  return (str.match(pattern) || []).length;
}

// count consecutives

// case of any consecutive of same type (ex: 83 or aZ or :;)
function countConsecutiveSameType(str: string) {
  return str;
}

// case of following repetitions of same char (ex: 22 or ff or %%)
function countRepeatedChar(str: string) {
const pattern = new RegExp('([\w\d' + regexpSYMBOLS + '])\\1*', 'g');
return (str.match(pattern) || []).reduce((count, repetition) => count + (repetition.length - 1), 0);
}

// case of sequential (forward and reverse) (ex: 34 or kJ)
function countSequentialForward(str: string) {
  return str;
}
function countSequentialReverse(str: string) {
  return str;
}
