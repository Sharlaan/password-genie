import scoreCalculator from '@/scoreCalculator';
describe('Score Calculator', () => {
    it('should return 0 for a very bad password (negative score)', () => {
        const pw = '';
        const score = scoreCalculator(pw);
        expect(score).toBe(0);
    });
    it('should cap at 100 for a secured password', () => {
        const pw = 'h@;P$tWl5E-3ha4^8C%';
        const score = scoreCalculator(pw);
        expect(score).toBe(100);
    });
});
//# sourceMappingURL=scoreCalculator.test.js.map