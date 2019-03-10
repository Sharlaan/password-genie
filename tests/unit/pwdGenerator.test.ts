// import { shallow } from '@vue/test-utils';
// import HelloWorld from '@/components/Result.vue';

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     const wrapper = shallow(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
// @ts-ignore
import { defaultSettings } from '@/App.vue';
import { countLetters, countNumbers, countSymbols } from '@/helpers';
import pwdGenerator from '@/pwdGenerator';

const { length, digits, symbols } = defaultSettings;

describe('Password Generator', () => {
  describe('testing defaults', () => {
    it('should have correct number of chars regarding default settings', () => {
      const pwd = pwdGenerator({});
      const lettersCount = countLetters(pwd);
      const numbersCount = countNumbers(pwd);
      const symbolsCount = countSymbols(pwd);

      expect(lettersCount + numbersCount + symbolsCount).toBe(length);
      expect(lettersCount).toBe(length - digits - symbols);
      expect(numbersCount).toBe(digits);
      expect(symbolsCount).toBe(symbols);
    });
  });

  describe('testing edge cases', () => {
    it('should have correct number of chars with digits = 0', () => {
      const pwd = pwdGenerator({ digits: 0 });
      const lettersCount = countLetters(pwd);
      const numbersCount = countNumbers(pwd);
      const symbolsCount = countSymbols(pwd);

      expect(lettersCount + numbersCount + symbolsCount).toBe(length);
      expect(lettersCount).toBe(length - 0 - symbols);
      expect(numbersCount).toBe(0);
      expect(symbolsCount).toBe(symbols);
    });

    it('should have correct number of chars with symbols = 0', () => {
      const pwd = pwdGenerator({ symbols: 0 });
      const lettersCount = countLetters(pwd);
      const numbersCount = countNumbers(pwd);
      const symbolsCount = countSymbols(pwd);

      expect(lettersCount + numbersCount + symbolsCount).toBe(length);
      expect(lettersCount).toBe(length - digits - 0);
      expect(numbersCount).toBe(digits);
      expect(symbolsCount).toBe(0);
    });

    it('should throw if the sum of settings exceeds total length', () => {
      const settings = { ...defaultSettings, digits: 7, symbols: 2 };
      expect(() => pwdGenerator(settings)).toThrow();
    });

    it('should throw if the sum of settings exceeds total length', () => {
      const settings = { ...defaultSettings, digits: 2, symbols: 7 };
      expect(() => pwdGenerator(settings)).toThrow();
    });
  });
});
