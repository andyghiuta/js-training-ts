import { expect } from 'chai';
import minMax from '../../session1/coding-challenges/2';

describe('Session 1', () => {
  it('minMax', () => {
    expect(minMax([1, 2])).to.deep.equal([1, 2]);
    expect(minMax([1, 2, 3, 4, 5])).to.deep.equal([1, 5]);
    expect(minMax([1, 2, -3, 4, 5])).to.deep.equal([-3, 5]);
    expect(minMax([2334454, 5])).to.have.ordered.members([5, 2334454])
      .but.not.have.ordered.members([2334454, 5]);
  });
});
