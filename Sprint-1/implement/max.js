function findMax(elements) {
  // Check if the input is an array; if not, throw a TypeError.
  if (!Array.isArray(elements)) {
    throw new TypeError("Input must be an array");
  }

  // If the array is empty, return return -Infinity.
  if (elements.length === 0) {
    return -Infinity;
  }

  // Filter the array to keep only numbers
  const numbers = elements.filter((item) => typeof item === "number");

  // If there are no numbers in the array, return -Infinity
  if (numbers.length === 0) {
    return -Infinity;
  }

  // Use Math.max with the spread operator to find the maximum number
  // This is an efficient way to find the largest value in an array
  return Math.max(...numbers);
}

module.exports = findMax;
