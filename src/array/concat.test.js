import _ from 'lodash';
import assert from 'assert';

import concat from '../../src/array/concat';

describe("Lodash", () => {
  describe("Array", () => {
    /**
     * @see https://lodash.com/docs/4.17.10#concat
     */
    describe("_.concat(array, [values])", () => {
      const sampleInputs = [
        {
          array: [1],
          values: [2, [3], [[4]]],
        },
      ];

      sampleInputs.forEach((sampleInput, index) => {
        it(`concat(${JSON.stringify(sampleInput.array)}, ${JSON.stringify(sampleInput.values)}`, () => {
          // Arrange
          const expectedResult = _.concat(sampleInput.array, ...sampleInput.values);

          // Act
          const actualResult = concat(sampleInput.array, ...sampleInput.values);

          // Assert
          expect(actualResult).toEqual(expectedResult);
        });
      });
    });
  });
});
