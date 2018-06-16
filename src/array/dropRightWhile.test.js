// @flow

import _ from 'lodash';
import assert from 'assert';

import dropRightWhile from '../../src/array/dropRightWhile';

describe('Lodash', () => {
  describe('Array', () => {
    /**
     * @see https://lodash.com/docs/4.17.10#dropRightWhile
     */
    describe('_.dropRightWhile(array, predicate)', () => {
      const sampleInputs = [
        {
          array: [1, 2, 3],
          predicate: undefined,
        },
        {
          array: [10, 20, 30, 40, 50],
          predicate: element => element > 30,
        },
        {
          array: [
            { user: 'barney', active: true },
            { user: 'fred', active: false },
            { user: 'pebbles', active: false },
          ],
          predicate: flintstoneFamilyMember => !flintstoneFamilyMember.active,
        },
      ];

      sampleInputs.forEach((sampleInput, index) => {
        it(`dropRightWhile(${JSON.stringify(sampleInput.array)}, ${JSON.stringify(sampleInput.predicate)})`, () => {
          // Arrange
          const expectedResult = _.dropRightWhile(sampleInput.array, sampleInput.predicate);

          // Act
          const actualResult = dropRightWhile(sampleInput.array, sampleInput.predicate);

          // Assert
          expect(actualResult).toEqual(expectedResult);
        });
      });
    });
  });
});
