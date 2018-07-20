/**
 * @param array
 * @see https://lodash.com/docs/4.17.10#fill
 */
export default function fill(array, value, start = 0, end) {
  end = end || array.length;

  for (let index = start; index < end; index++) {
    array[index] = value;
  }

  return array;
};
