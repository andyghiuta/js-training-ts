/* eslint-disable no-loop-func */
import { expect } from 'chai';
import sumFactory from '../../session3/coding-challenges/2';

describe('Session 3', () => {
  it('sumFactory sums up with 2', () => {
    const sumTwo = sumFactory(2);
    expect(sumTwo(1)).to.equal(3);
    expect(sumTwo(2)).to.equal(4);
    expect(sumTwo(-2)).to.equal(0);
  });
  it('sumFactory sums up with 10', () => {
    const sumTwo = sumFactory(10);
    expect(sumTwo(1)).to.equal(11);
    expect(sumTwo(2)).to.equal(12);
    expect(sumTwo(-2)).to.equal(8);
  });
  it('sumFactory sums up with -10', () => {
    const sumTwo = sumFactory(-10);
    expect(sumTwo(1)).to.equal(-9);
    expect(sumTwo(2)).to.equal(-8);
    expect(sumTwo(-2)).to.equal(-12);
  });
});
