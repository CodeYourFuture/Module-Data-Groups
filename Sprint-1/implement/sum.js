function sum(elements) {
  // Return -Infinity if the input is not an array
  if (!Array.isArray(elements)) {
    return null;
  }

  // Check if the input is an array and contains numeric values
  const numericValues = elements.filter(
    (elements) => typeof elements === "number"
  );

  // If the sorted list is empty, return null
  if (numericValues.length === 0) return 0;

  // Return the largest number inMath.sum(...numericValues); the sorted list
  let sum = 0;
  for (let i = 0; i < numericValues.length; i++) {
    sum += numericValues[i];
  }
    return sum;
}

module.exports = sum;
