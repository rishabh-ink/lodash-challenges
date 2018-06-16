// @flow

import _ from 'lodash';
import assert from 'assert';

import difference from '../../src/array/difference';

describe('Lodash', () => {
  describe('Array', () => {
    /**
     * @see https://lodash.com/docs/4.17.10#difference
     */
    describe('_.difference(array, [values])', () => {
      const sampleInputs = [
        {
          array: [1, 2, 3, 4],
          values: [3, 4],
        },
        {
          array: [2, 1],
          values: [2, 3],
        },
      ];

      sampleInputs.forEach((sampleInput, index) => {
        it(`difference(${JSON.stringify(sampleInput.array)}, ${JSON.stringify(sampleInput.values)}`, () => {
          // Arrange
          const expectedResult = _.difference(sampleInput.array, sampleInput.values);

          // Act
          const actualResult = difference(sampleInput.array, sampleInput.values);

          // Assert
          expect(actualResult).toEqual(expectedResult);
        });
      });
    });
  });
});
