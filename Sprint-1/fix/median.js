// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;
  //Keep only the numbers
  const numbers = list.filter(item => typeof item === 'number');
  // If there are no numbers, return null
  if (numbers.length === 0) return null;
  // Sort the numbers in ascending order
  numbers.sort((a, b) => a - b);
  // If the list has an even number of elements, return the average of the two middle
  const middleIndex = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  } else //If the count is odd, return the middle number
    return numbers[middleIndex];
}

module.exports = calculateMedian;
