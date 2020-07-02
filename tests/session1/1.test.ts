import { expect } from 'chai';
import { sum, animals } from '../../session1/coding-challenges/1';

describe('Session 1', () => {
  it('calculates sum', () => {
    expect(sum(1, 2)).to.equal(3);
    // no need for the following two if covered by TypeScript (type definitions)
    // expect(sum('1', 2)).to.equal(3);
    // expect(sum(1, '2')).to.equal(3);
    expect(sum(-1, 2)).to.equal(1);
  });
  it('calculates legs', () => {
    expect(animals(1, 2, 3)).to.equal(22);
    expect(animals(2, 3, 5)).to.equal(36);
    expect(animals(5, 2, 8)).to.equal(50);
    const getWrongAnimalLegs = () => {
      animals(-1, 2, 3);
    };
    expect(getWrongAnimalLegs).to.throw(/wrong type/);
  });
});
