// @flow

/**
 * @param array
 * @param values
 * @see https://lodash.com/docs/4.17.10#concat
 */
export default function concat<T1, T2>(array: Array<T1>, ...values: Array<T2>): Array<T1 | T2> {
  return array.concat(...values);
}
