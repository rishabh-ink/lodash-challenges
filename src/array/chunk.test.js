import _ from 'lodash';
import assert from 'assert';

import chunk from '../../src/array/chunk';

describe('Lodash', () => {
  describe('Array', () => {
    /**
     * @see https://lodash.com/docs/4.17.10#chunk
     */
    describe('_.chunk(array, size)', () => {
      const sampleInputs = [
        {
          array: ['a', 'b', 'c', 'd'],
          size: 2,
        },
        {
          array: ['one', 'two', 'three', 'four', 'five'],
          size: 3,
        },
        {
          array: [
            'alpha',
            'bravo',
            'charlie',
            'delta',
            'echo',
            'foxtrot',
            'golf',
            'hotel',
            'india',
            'juliet',
            'kilo',
            'lima',
            'mike',
          ],
          size: 3,
        },
        {
          array: [
            'alpha',
            'bravo',
            'charlie',
            'delta',
            'echo',
            'foxtrot',
            'golf',
            'hotel',
            'india',
            'juliet',
            'kilo',
            'lima',
            'mike',
          ],
          size: 1,
        },
      ];

      sampleInputs.forEach((sampleInput, index) => {
        it(`chunk(${JSON.stringify(sampleInput.array)}, ${JSON.stringify(sampleInput.size)})}`, () => {
          // Arrange
          const expectedResult = _.chunk(sampleInput.array, sampleInput.size);

          // Act
          const actualResult = chunk(sampleInput.array, sampleInput.size);

          // Assert
          expect(actualResult).toEqual(expectedResult);
        });
      });
    });
  });
});
