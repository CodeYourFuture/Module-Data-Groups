function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  for (const item of elements) {
    if (typeof item !== "number") {
      throw new Error("sum requires an array of numbers");
    }
  }

  let total = 0;
  for (const item of elements) {
    total += item;
  }
  return total;
}

module.exports = sum;
