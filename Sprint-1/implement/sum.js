function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  let total = 0;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] !== "number") {
      throw new Error("sum requires an array of numbers");
    }

    total += elements[i];
  }
  return total;
}

module.exports = sum;
