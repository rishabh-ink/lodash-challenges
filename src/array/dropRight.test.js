// @flow

import _ from 'lodash';
import assert from 'assert';

import dropRight from '../../src/array/dropRight';

describe("Lodash", () => {
  describe("Array", () => {
    /**
     * @see https://lodash.com/docs/4.17.10#dropRight
     */
    describe("_.dropRight(array, howMany)", () => {
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
        it(`dropRight(${JSON.stringify(sampleInput.array)}, ${JSON.stringify(sampleInput.howMany)})`, () => {
          // Arrange
          const expectedResult = _.dropRight(sampleInput.array, sampleInput.howMany);

          // Act
          const actualResult = dropRight(sampleInput.array, sampleInput.howMany);

          // Assert
          expect(actualResult).toEqual(expectedResult);
        });
      });
    });
  });
});
