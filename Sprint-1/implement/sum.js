function sum(elements) {
  // 1. Check if input is a valid array
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  // 2. Handle empty array edge case (sum of empty array is 0)
  if (elements.length === 0) {
    return 0;
  }

  // 3. Validate that every item in the array is strictly a number
  let total = 0;
  for (const item of elements) {
    if (typeof item !== "number" || Number.isNaN(item)) {
      throw new Error("sum requires an array of numbers");
    }
    total += item;
  }

  // 4. Return the calculated sum
  return total;
}

module.exports = sum;