/**
 * Finds the maximum value in a list of numbers.
 * @param {number[]} list - An array of numbers.
 * @returns {number} - The maximum value in the list.
 */
function findMax(list) {
  if (list.length === 0) {
    throw new Error("The list cannot be empty.");
  }
  return Math.max(...list);
}

// Test cases
console.log(findMax([1, 2, 3, 4, 5])); // Expected: 5
console.log(findMax([-10, -20, -3, -4])); // Expected: -3
console.log(findMax([100])); // Expected: 100
console.log(findMax([0, 0, 0])); // Expected: 0

// Uncomment the following line to test error handling
// console.log(findMax([])); // Expected: Error: The list cannot be empty.

module.exports = findMax;
