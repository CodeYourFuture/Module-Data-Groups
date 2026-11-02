function sum(elements) {
  if (
    !elements.every(
      (currentValue) =>
        typeof currentValue === "number" && !Number.isNaN(currentValue)
    )
  ) {
    throw new Error("sum requires an array of numbers");
  }
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  let total = 0;
  for (number of elements) {
    total += number;
  }
  return total;
}

module.exports = sum;
