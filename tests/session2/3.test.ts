import { expect } from 'chai';
import getAnswers from '../../session2/coding-challenges/3';

describe('Session 2', () => {
  it('getAnswers', () => {
    const students = [
      {
        id: 1, name: 'John Doe', score: 8, section: 'B',
      },
      {
        id: 2, name: 'Jane Doe', score: 7, section: 'A',
      },
      {
        id: 3, name: 'Steve Doe', score: 9.5, section: 'A',
      },
      {
        id: 4, name: 'Novac Doe', score: 5, section: 'B',
      },
      {
        id: 5, name: 'Selena Doe', score: 9.9, section: 'C',
      },
      {
        id: 6, name: 'Raphael Doe', score: 8, section: 'B',
      },
      {
        id: 7, name: 'Simona Doe', score: 10, section: 'C',
      },
    ];
    expect(getAnswers(students, 4)).to.deep.equal({
      studentsPerSection: {
        A: 2,
        B: 3,
        C: 2,
      },
      score: 5,
      highest: {
        id: 7, name: 'Simona Doe', score: 10, section: 'C',
      },
      average: {
        A: 8.25,
        B: 7,
        C: 9.95,
      },
    });
  });
});
