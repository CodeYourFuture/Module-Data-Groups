function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }
  let total = 0;
  for (const element of elements) {
    if (typeof element !== "number") {
      throw new Error("sum requires an array of numbers");
    }
    total += element;
  }
  return Number(total.toFixed(2));
}

module.exports = sum;
