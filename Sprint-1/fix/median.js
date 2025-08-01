// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const numbers = list.filter(Number.isFinite); // Filter to keep only numbers
  if (numbers.length === 0) {
    return null; // If there are no numbers, return null
  }
  numbers.sort((a, b) => a - b); // Sort the numbers

  const middleIndex = Math.floor(numbers.length / 2); // Find the middle index

  if (numbers.length % 2 === 0) {
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2; //Even number of elements → average of two middle numbers
  }else {
    return numbers[middleIndex]; // Middle number for odd length
  }
}


module.exports = calculateMedian;