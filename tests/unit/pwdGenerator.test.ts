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
import pwdGenerator from '@/pwdGenerator';

describe.skip('Password Generator', () => {
  describe('testing defaults', () => {
    it('should )', () => {
      const settings = '';
      const pwd = pwdGenerator({});
      expect(pwd).toMatch(/[[a-zA-Z]{2}\d{4}]/);
    });

    it('should cap at 100 for a secured password', () => {
      const settings = '';
      const pwd = pwdGenerator({});
      expect(pwd).toMatch(/\w/);
    });
  });

  describe('testing edge cases', () => {
    it('');

    it('');
  });
});
