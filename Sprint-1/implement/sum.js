function sum(elements) {
  const numbers = elements.filter((el) => Number.isFinite(el));
  const sumNumbers = numbers.reduce((a, b) => a + b, 0);
  return sumNumbers;
}

module.exports = sum;
