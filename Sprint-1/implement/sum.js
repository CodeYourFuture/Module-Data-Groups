function sum(elements) {
  numericalElements = elements.filter((el) => typeof el === "number");
  return numericalElements.length > 0
    ? numericalElements.reduce((a, c) => a + c, 0)
    : 0;
}

module.exports = sum;