// @flow

/**
 * @param array
 * @see https://lodash.com/docs/4.17.10#compact
 */
export default function compact<T>(array: Array<T>): Array<T> {
  return array.filter((item: T) => Boolean(item));
}
