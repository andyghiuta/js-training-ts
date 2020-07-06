/* eslint-disable no-loop-func */
import { expect } from 'chai';
import { spy, SinonSpy } from 'sinon';
import ex1 from '../../session3/coding-challenges/1';

const fibResults = [1, 2, 3, 5, 8, 13, 21, 34, 55];
const callCount = [1, 3, 5, 9, 15, 25, 41, 67, 109];
const callCountCached = [1, 3, 3, 3, 3, 3, 3, 3, 3];
describe('Session 3', () => {
  let spyFib: SinonSpy;
  beforeEach(() => {
    spyFib = spy(ex1, 'fib');
  });
  afterEach(() => {
    spyFib.restore();
  });
  for (let nr = 1; nr <= fibResults.length; nr += 1) {
    it(`fib returns correct result for ${nr}`, () => {
      expect(ex1.fib(nr)).to.equal(fibResults[nr - 1]);
      expect(spyFib.callCount).to.eq(callCount[nr - 1]);
      // expect(spyFib.callCount).to.eq(callCountCached[nr - 1]);
    });
  }
});
