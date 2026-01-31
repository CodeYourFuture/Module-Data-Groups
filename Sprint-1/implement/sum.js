function sum(elements) {
  // Check if input is an array
  if (!Array.isArray(elements)) {
    return null;
  }
  // Check if array is empty
  if (elements.length === 0) {
    return 0;
  }
  // Filter only numeric values
  const numericElements = elements.filter((item) => typeof item === "number");
  if (numericElements.length === 0) {
    return -Infinity;
  }
  // Calculate the sum of numeric values
  let total = 0;
  for (let i = 0; i < numericElements.length; i++) {
    total += numericElements[i];
  }
  return total;
}

module.exports = sum;
