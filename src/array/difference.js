// @flow

/**
 * @param array
 * @param values
 * @see https://lodash.com/docs/4.17.10#difference
 */
export default function difference<T1, T2>(array: Array<T1>, values: Array<T2>): Array<T1> {
  return array.filter((element: T1) => !values.includes(element));
}
