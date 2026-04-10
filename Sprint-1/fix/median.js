
// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix`
// to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // return null if input is not an array
  if (!Array.isArray(list)) {
    return null;
  }

  // filter only numbers from the list
  const numbers = list.filter(item => Number.isFinite(item));
  
  // return null if no numbers found
  if (numbers.length === 0) {
    return null;
  }
  
  // sort the numbers
  numbers.sort((a, b) => a - b);
  
  const middleIndex = Math.floor(numbers.length / 2);
  
  // if even number of elements, average the two middle values
  if (numbers.length % 2 === 0) {
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  }
  
  return numbers[middleIndex];
}

module.exports = calculateMedian;
