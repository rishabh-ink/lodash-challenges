// @flow

import _ from 'lodash';
import assert from 'assert';

import compact from '../../src/array/compact';

describe('Lodash', () => {
  describe('Array', () => {
    /**
     * @see https://lodash.com/docs/4.17.10#compact
     */
    describe('_.compact(array)', () => {
      const sampleInputs = [
        {
          array: [0, 1, false, 2, '', 3],
        },
        {
          array: [],
        },
        {
          array: ['0', 'null', null, 'undefined', undefined, 42, 1, -1],
        },
      ];

      sampleInputs.forEach((sampleInput, index) => {
        it(`compact(${JSON.stringify(sampleInput.array)})`, () => {
          // Arrange
          const expectedResult = _.compact(sampleInput.array);

          // Act
          const actualResult = compact(sampleInput.array);

          // Assert
          expect(actualResult).toEqual(expectedResult);
        });
      });
    });
  });
});
