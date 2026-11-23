function sum(elements) {
  if (
    !Array.isArray(elements) ||
    elements.some((item) => typeof item !== "number" || Number.isNaN(item))
  ) {
    throw new Error("sum requires an array of numbers");
  }

  return elements.reduce((total, num) => total + num, 0);
}

module.exports = sum;