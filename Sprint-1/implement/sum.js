function sum(elements) {
  const numericalElements = [];
  for (const element of elements) {
    if (typeof element === "number") {
      numericalElements.push(element);
    }
  }
  return numericalElements.reduce((a, c) => a + c, 0);
}

console.log(sum([]));

module.exports = sum;
