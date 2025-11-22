function sum(elements) {
  let totalSum = 0;
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      totalSum += elements[i];
    }
  }
  return totalSum;
}

module.exports = sum;
