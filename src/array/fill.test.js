// @flow

import _ from 'lodash';
import assert from 'assert';

import fill from '../../src/array/fill';

describe('Lodash', () => {
  describe('Array', () => {
    /**
     * @see https://lodash.com/docs/4.17.10#fill
     */
    describe('_.fill(array, predicate)', () => {
      const sampleInputs = [
        {
          array: [1, 2, 3],
          value: 'a',
          start: 0,
          end: 3,
        },
        {
          array: Array(3),
          value: 2,
          start: undefined,
          end: undefined,
        },
        {
          array: [4, 6, 8, 10],
          value: '*',
          start: 1,
          end: 3,
        },
      ];

      sampleInputs.forEach((sampleInput, index) => {
        it(`fill(
          ${JSON.stringify(sampleInput.array)},
          ${JSON.stringify(sampleInput.value)},
          ${JSON.stringify(sampleInput.value)},
          ${JSON.stringify(sampleInput.start)},
          ${JSON.stringify(sampleInput.end)}
        )`, () => {
          // Arrange
          const expectedResult = _.fill(sampleInput.array, sampleInput.value, sampleInput.start, sampleInput.end);

          // Act
          const actualResult = fill(sampleInput.array, sampleInput.value, sampleInput.start, sampleInput.end);

          // Assert
          expect(actualResult).toEqual(expectedResult);
        });
      });
    });
  });
});
