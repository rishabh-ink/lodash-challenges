const drop = (array, n = 1) => {
  if (Number.isInteger(n)) {
    return array.filter(
      (element, index) => index >= n,
    );
  }

  return array;
};

module.exports = drop;
