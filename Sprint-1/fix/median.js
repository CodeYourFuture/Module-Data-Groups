// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // If list is not an array, return null
  if (!Array.isArray(list)) return null;

  // Filter only real numbers
  const numbers = list.filter((item) => Number.isFinite(item));
  
  // If no numbers, return null
  if (numbers.length === 0) return null;


  // Sort numerically
  numbers.sort((a, b) => a - b);

  const mid = Math.floor(numbers.length / 2);

  // Odd length → return middle
  if (numbers.length % 2 === 1) {
    return numbers[mid];
  }

  // Even length → average of two middle values
  return (numbers[mid - 1] + numbers[mid]) / 2;
}

  
module.exports = calculateMedian;
