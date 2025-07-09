function sum(elements) {
  // Return -Infinity if the input is not an array
  if (!Array.isArray(elements)) {
    return null;
  }

  // Check if the input is an array and contains numeric values
  const numericValues = elements.filter(
    (elements) => typeof elements === "number"
  );

  // If there are no numeric values, return 0
  if (numericValues.length === 0) return 0;

  // Return the sum of all numeric values in the array
  let sum = 0;
  for (let i = 0; i < numericValues.length; i++) {
    sum += numericValues[i];
  }
    return sum;
}

module.exports = sum;
