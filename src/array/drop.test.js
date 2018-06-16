// @flow

import _ from 'lodash';
import assert from 'assert';

import drop from '../../src/array/drop';

describe("Lodash", () => {
  describe("Array", () => {
    /**
     * @see https://lodash.com/docs/4.17.10#drop
     */
    describe("_.drop(array, howMany)", () => {
      const sampleInputs = [
        {
          array: [1, 2, 3],
          howMany: undefined,
        },
        {
          array: [4, 5, 6],
          howMany: null,
        },
        {
          array: [7, 8, 9],
          howMany: 0,
        },
        {
          array: [10, 11, 12],
          howMany: 2,
        },
        {
          array: [13, 14, 15],
          howMany: 5,
        },
        {
          array: ['a', 'b', 'c', 'd', 'e'],
          howMany: 2,
        },
      ];

      sampleInputs.forEach((sampleInput, index) => {
        it(`drop(${JSON.stringify(sampleInput.array)}, ${JSON.stringify(sampleInput.howMany)})`, () => {
          // Arrange
          const expectedResult = _.drop(sampleInput.array, sampleInput.howMany);

          // Act
          const actualResult = drop(sampleInput.array, sampleInput.howMany);

          // Assert
          expect(actualResult).toEqual(expectedResult);
        });
      });
    });
  });
});
