function sum(elements) {
  const numericalElements = [];
  for (const element of elements) {
    if (typeof element === "number") {
      numericalElements.push(element);
    }
  }
  // return numericalElements.reduce((a, c) => a + c, 0);

  let total = 0;
  for (const number of numericalElements) {
    total += number
  }
  return total
}

module.exports = sum;
