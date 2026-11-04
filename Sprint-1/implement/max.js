function findMax(elements) {
  // 1. Check if input is a valid array and not null/undefined
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }

  // 2. Handle empty array edge case per requirements
  if (elements.length === 0) {
    return -Infinity;
  }

  // 3. Validate that every item in the array is strictly a number (no strings, null, etc.)
  for (const item of elements) {
    if (typeof item !== "number" || Number.isNaN(item)) {
      throw new Error("findMax requires an array of numbers");
    }
  }

  // 4. Return the maximum number using Math.max
  return Math.max(...elements);
}

module.exports = findMax;
