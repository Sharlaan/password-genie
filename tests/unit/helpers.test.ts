import {
  countConsecutiveSameType,
  countLetters,
  countNumbers,
  countRepeatedChar,
  countSequentialForward,
  countSequentialReverse,
  countSymbols,
  countUppercaseLetters,
} from '@/helpers';

describe('countConsecutiveSameType', () => {
  it('should detect any consecutive chars of same type in 83xuAP91:;', () => {
    const pw = '83xuAP91:;';
    const count = countConsecutiveSameType(pw);
    expect(count).toBe(5);
  });

  it('should not detect in 8a3Z9f:1;', () => {
    const pw = '8a3Z9f:1;';
    const count = countConsecutiveSameType(pw);
    expect(count).toBe(0);
  });
});

describe('countLetters', () => {
  it('should detect any upper/lower cased letters in aB1c2D', () => {
    const pw = 'aB1c2D';
    const count = countLetters(pw);
    expect(count).toBe(4);
  });

  it('should not detect in 1%2_3!4', () => {
    const pw = '1%2_3!4';
    const count = countLetters(pw);
    expect(count).toBe(0);
  });
});

describe('countNumbers', () => {
  it('should detect numbers in aB1c2D', () => {
    const pw = 'aB1c2D';
    const count = countNumbers(pw);
    expect(count).toBe(2);
  });

  it('should not detect in a%B_c!D', () => {
    const pw = 'a%B_c!D';
    const count = countNumbers(pw);
    expect(count).toBe(0);
  });
});

describe('countRepeatedChar', () => {
  it('should detect repetitions of same char in 22fff%%%%', () => {
    const pw = '22fff%%%%';
    const count = countRepeatedChar(pw);
    expect(count).toBe(6);
  });

  it('should not detect in ab12:;', () => {
    const pw = 'ab12:;';
    const count = countRepeatedChar(pw);
    expect(count).toBe(0);
  });
});

describe('countSequentialForward', () => {
  it('should detect a forward sequential repetition in 34iJ', () => {
    const pw = '34iJ';
    const count = countSequentialForward(pw);
    expect(count).toBe(2);
  });

  it('edge case: should not detect in 90zA', () => {
    const pw = '90zA';
    const count = countSequentialForward(pw);
    expect(count).toBe(0);
  });
});

describe('countSequentialReverse', () => {
  it('should detect a reverse sequential repetition in 43Lk', () => {
    const pw = '43Lk';
    const count = countSequentialReverse(pw);
    expect(count).toBe(2);
  });

  it('edge case: should not detect in 09Az', () => {
    const pw = '09Az';
    const count = countSequentialReverse(pw);
    expect(count).toBe(0);
  });
});

describe('countSymbols', () => {
  it('should detect symbols in a!bc$?d', () => {
    const pw = 'a!bc$?d';
    const count = countSymbols(pw);
    expect(count).toBe(3);
  });

  it('should not detect symbols in a1b2c3d', () => {
    const pw = 'a1b2c3d';
    const count = countSymbols(pw);
    expect(count).toBe(0);
  });
});

describe('countUppercaseLetters', () => {
  it('should detect upper-cased letters in aBcD', () => {
    const pw = 'aBcD';
    const count = countUppercaseLetters(pw);
    expect(count).toBe(2);
  });

  it('should not detect upper-cased letters in a1b2c3d', () => {
    const pw = 'a1b2c3d';
    const count = countUppercaseLetters(pw);
    expect(count).toBe(0);
  });
});
