// @flow

/**
 * @param array
 * @param howMany
 * @see https://lodash.com/docs/4.17.10#drop
 */
export default function drop<T>(array: Array<T>, howMany: ?number = 1): Array<T> {
  return array.filter((element: T, index: number) => index >= Number(howMany));
}
