function sum(elements) {
  // Check if the input is an array; if not, throw a TypeError.
  if (!Array.isArray(elements)) {
    throw new TypeError("Input must be an array");
  }

  // If the array is empty, return 0.
  if (elements.length === 0) {
    return 0;
  }

  // Filter the array to keep only numbers
  const numbers = elements.filter((item) => typeof item === "number");

  // Calculate the sum of the numbers using a for loop
  let total = 0;

  for (const item of numbers) {
    total += item;
  }
  return total;
}

module.exports = sum;
