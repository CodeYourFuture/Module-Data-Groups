function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }
  if (
    !elements.every(
      (element) => typeof element === "number" && !Number.isNaN(element)
    )
  ) {
    throw new Error("sum requires an array of numbers");
  }
  const sum = elements.reduce((sum, number) => {
    return number + sum;
  }, 0);
  return sum;
}
module.exports = sum;
