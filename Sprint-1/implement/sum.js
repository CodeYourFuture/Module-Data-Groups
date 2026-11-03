function sum(elements) {
  if (
    !Array.isArray(elements) ||
    elements.some((item) => typeof item !== "number")
  ) {
    throw new Error("sum requires an array of numbers");
  }
  let total = 0;
  for (const item of elements) {
    total += item;
  }
  return total;
}

module.exports = sum;
