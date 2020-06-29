import { expect } from 'chai';
import maximumScore from '../../session2/coding-challenges/1';

describe('Session 2', () => {
  it('maximumScore', () => {
    expect(maximumScore([
      { tile: 'N', score: 1 },
      { tile: 'K', score: 5 },
      { tile: 'Z', score: 10 },
      { tile: 'X', score: 8 },
      { tile: 'D', score: 2 },
      { tile: 'A', score: 1 },
      { tile: 'E', score: 1 },
    ])).to.equal(28);
    expect(maximumScore([
      { tile: 'B', score: 2 },
      { tile: 'V', score: 4 },
      { tile: 'F', score: 4 },
      { tile: 'U', score: 1 },
      { tile: 'D', score: 2 },
      { tile: 'O', score: 1 },
      { tile: 'U', score: 1 },
    ])).to.equal(15);
  });
});
