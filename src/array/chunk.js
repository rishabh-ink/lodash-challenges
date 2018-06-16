// @flow

/**
 * @param array
 * @param howMany
 * @see https://lodash.com/docs/4.17.10#chunk
 */
export default function chunk<T>(array: Array<T>, size: number = 1) {
  const chunkedArray: Array<T | Array<T>> = [];

  for (let sliceIndex = 0; sliceIndex < array.length; sliceIndex += size) {
    chunkedArray.push(array.slice(sliceIndex, sliceIndex + size));
  }

  return chunkedArray;
}
