import { expect } from 'chai';
import afterNYears from '../../session2/coding-challenges/2';

describe('Session 2', () => {
  it('afterNYears', () => {
    let people: Record<string, number> = {
      Joel: 32,
      Fred: 44,
      Reginald: 65,
      Susan: 33,
      Julian: 13,
    };
    let years = 1;
    expect(afterNYears(people, years)).to.deep.equal({
      Joel: 33,
      Fred: 45,
      Reginald: 66,
      Susan: 34,
      Julian: 14,
    });

    people = {
      Genie: 1000,
      Joe: 40,
    };
    years = 5;
    expect(afterNYears(people, years)).to.deep.equal({
      Genie: 1005,
      Joe: 45,
    });

    people = {
      BenjaminButton: 75,
    };
    years = -75;
    expect(afterNYears(people, years)).to.deep.equal({
      BenjaminButton: 150,
    });
  });
});
