// @flow

/**
 * @param array
 * @param predicate
 * @see https://lodash.com/docs/4.17.10#dropRightWhile
 */
export default function dropRightWhile<T>(
  array: Array<T>,
  predicate: (element: any, index: number, array: Array<T>) => boolean = (element, index, array) => Boolean(element),
): Array<T> {
  return array.filter((element: T, index: number) => !predicate(element, index, array));
}
