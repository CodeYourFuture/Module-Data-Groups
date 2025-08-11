function sum(elements) {
  return elements.filter(Number.isFinite).reduce((acc, num) => acc + num, 0);
}

module.exports = sum;
