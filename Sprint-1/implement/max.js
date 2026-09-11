function findMax(elements) {
  // checking if the input is an array
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }
  if (elements.length === 0) {
    return -Infinity;
  }
  const allNumbers = elements.every(
    (item) => typeof item === "number" && !Number.isNaN(item)
  );
  if (!allNumbers) {
    throw new Error("findMax requires an array of numbers");
  }

  const sorted = [...elements].sort((a, b) => a - b);
  const max = sorted[sorted.length - 1];

  return max;
}

module.exports = findMax;
