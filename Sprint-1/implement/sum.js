function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }
  if (!elements.every((a) => typeof a === "number" && !Number.isNaN(a))) {
    throw new Error("sum requires an array of numbers");
  }
  let Total = 0;
  for (const value of elements) {
    Total += value;
  }
  return Total;
}

module.exports = sum;
