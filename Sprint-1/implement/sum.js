function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  if (!elements.every((value) => Number.isFinite(value))) {
    throw new Error("sum requires an array of numbers");
  }

  let total = 0;
  for (number of elements) {
    total += number;
  }
  return total;
}

module.exports = sum;
