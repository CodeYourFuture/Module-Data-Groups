function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }
  if (!elements.every((a) => typeof a === "number" && !Number.isNaN(a))) {
    throw new Error("sum requires an array of numbers");
  }
  let total = 0;
  for (const value of elements) {
    total += value;
  }
  return Total;
}

module.exports = sum;
