function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }
  for (const items of elements) {
    if (typeof items !== "number") {
      throw new Error("sum requires an array of numbers");
    }
  }
  if (elements.length === 0) {
    return 0;
  }

  let sum = 0;
  for (const items of elements) {
    sum = sum + items;
  }
  return sum;
}

module.exports = sum;
