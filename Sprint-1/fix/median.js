// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Filtering out non-numeric values
  const numbers = list.filter(val => typeof val === 'number' && !isNaN(val));
  
  // Returning null if no numbers are found
  if (numbers.length === 0) {
    return null;
  }

  // Sorting the numbers in ascending order
  numbers.sort((a, b) => a - b);

  // Calculating the median
  const middleIndex = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    // Even number of elements - average the two middle values
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  } else {
    // Odd number of elements - return the middle value
    return numbers[middleIndex];
  } 
}

module.exports = calculateMedian;
