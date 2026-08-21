// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {

  if (!Array.isArray(list)) return null;

  // Filter out non-numeric values and create a sorted copy
  const numbers = list
    .filter((item) => typeof item === "number" && !isNaN(item))
    .sort((a, b) => a - b);

  // Return null if there are no valid numbers
  if (numbers.length === 0) {
    return null;
  }
  
  const middleIndex = Math.floor(numbers.length / 2);

  // If even length, take average of the two middle numbers
  if (numbers.length % 2 === 0) {
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  }

  // If odd length, return middle number
  return numbers[middleIndex];
}

module.exports = calculateMedian;
