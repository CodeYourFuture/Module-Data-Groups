function sum(elements) {
  // filter out the numbers and sum them up
  return elements
    .filter((item) => Number.isFinite(item))
    .reduce((acc, num) => acc + num, 0);
}

module.exports = sum;
