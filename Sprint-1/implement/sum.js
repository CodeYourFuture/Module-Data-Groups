function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  for (const element of elements) {
    if (typeof element !== "number") {
      throw new Error("sum requires an array of numbers");
    }
  }

  let total = 0;

  for (const element of elements) {
    total += element;
  }

  return total;
}

module.exports = sum;
