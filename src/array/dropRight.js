// @flow

/**
 * @param array
 * @see https://lodash.com/docs/4.17.10#dropRight
 */
export default function dropRight<T>(array: Array<T>, howMany: ?number = 1): Array<T> {
  return array.filter(
    (element: T, index: number) => array.length - index > Number(howMany),
  );
};
