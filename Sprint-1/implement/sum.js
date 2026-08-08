function sum(elements) {
  return elements.filter(n => typeof n === "number").reduce((acc, n) => acc + n, 0);
}

module.exports = sum;
