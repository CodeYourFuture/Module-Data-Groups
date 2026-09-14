function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  if (elements.length === 0) {
    return 0;
  }
  // every element must be a valid number
  const allNumbers = elements.every(
    (item) => typeof item === "number" && !Number.isNaN(item)
  );
  if (!allNumbers) {
    throw new Error("sum requires an array of numbers");
  }

  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    total += elements[i];
  }
  return total;
}

module.exports = sum;
