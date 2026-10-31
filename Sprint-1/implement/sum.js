function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  let total = 0;

  for (const element of elements) {
    if (!Number.isFinite(element)) {
      throw new Error("sum requires an array of numbers");
    }
    total += element;
  }

  return total;
}

module.exports = sum;
