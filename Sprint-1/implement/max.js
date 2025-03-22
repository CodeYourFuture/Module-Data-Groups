function findMax(elements) {
  if (!Array.isArray(elements)) return -Infinity; // This handles non-array input
  const numElements = elements.filter((item) => typeof item === "number"); // this checks if elements are numbers
  return numElements.length > 0 ? Math.max(...numElements) : -Infinity; // math.max  returns the max number
}

module.exports = findMax;
