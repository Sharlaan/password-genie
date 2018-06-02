import { countLetters, countNumbers, countRepeatedChar, countSymbols, countConsecutiveSameType, countSequentialForward, countSequentialReverse, } from '@/helpers';
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
export default function scoreCalculator(password) {
    let score = 0;
    const len = password.length;
    // Number of Characters  +(n*4)
    score += len * 4;
    // Lower/Uppercase Letters	+((len-n)*2)
    const letters = countLetters(password);
    score += (len - letters) * 2;
    // Letters Only -n
    score -= letters === len ? len : 0;
    // Consecutive Lowercase/Uppercase/Numbers/Symbols chars	-(n*2)
    const consecutives = countConsecutiveSameType(password);
    score -= consecutives * 2;
    // Sequential Letters or numbers (3+)	-(n*3);
    const sequential = countSequentialForward(password) + countSequentialReverse(password);
    score -= sequential * 3;
    // Numbers  +(n*4)
    const numbers = countNumbers(password);
    score += numbers * 4;
    // Numbers Only  -n
    score -= numbers === len ? len : 0;
    // Symbols	+(n*6)
    const symbols = countSymbols(password);
    score += symbols * 6;
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
    // console.table({
    //   length: len,
    //   letters,
    //   numbers,
    //   symbols,
    //   consecutives,
    //   sequential,
    // });
    return score < 0 ? 0 : score > 100 ? 100 : score;
}
//# sourceMappingURL=scoreCalculator.js.map