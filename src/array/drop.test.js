const _ = require('lodash');
const assert = require('assert');

const drop = require('../../src/array/drop');

describe("Lodash", () => {
  describe("Array", () => {
    /**
     * @see https://lodash.com/docs/4.17.10#drop
     */
    describe("_.drop(array, numberOfElementsToDrop)", () => {
      const sampleInputs = [
        {
          array: [1, 2, 3],
          numberOfElementsToDrop: undefined,
        },
        {
          array: [4, 5, 6],
          numberOfElementsToDrop: null,
        },
        {
          array: [7, 8, 9],
          numberOfElementsToDrop: 0,
        },
        {
          array: [10, 11, 12],
          numberOfElementsToDrop: 2,
        },
        {
          array: [13, 14, 15],
          numberOfElementsToDrop: 5,
        },
        {
          array: ['a', 'b', 'c', 'd', 'e'],
          numberOfElementsToDrop: 2,
        },
      ];

      sampleInputs.forEach((sampleInput, index) => {
        it(`drop(${JSON.stringify(sampleInput.array)}, ${JSON.stringify(sampleInput.numberOfElementsToDrop)})`, () => {
          // Arrange
          const expectedResult = _.drop(sampleInput.array, sampleInput.numberOfElementsToDrop);

          // Act
          const actualResult = drop(sampleInput.array, sampleInput.numberOfElementsToDrop);

          // Assert
          expect(actualResult).toEqual(expectedResult);
        });
      });
    });
  });
});
