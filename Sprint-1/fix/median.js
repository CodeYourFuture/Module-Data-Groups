// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   return median;
// }

function calculateMedian(list) {
  // This checks if the input is not an array
  if (!Array.isArray(list)) {
    return null;
  }
  
  //  This checks if the input is not an a number (keep only numbers)
  const numericValues = list.filter(val => typeof val === 'number' && !isNaN(val));
  
  // If no numeric values found, return null
  if (numericValues.length === 0) {
    return null;
  }
  
  // This sorts the numeric values and does not change original array
  const sortedNumbers = numericValues.sort((a, b) => a - b);
  
  const length = sortedNumbers.length;
  const middleIndex = Math.floor(length / 2);
  
  // This checks that if there are odd number of elements, return the middle element
  if (length % 2 === 1) {
    return sortedNumbers[middleIndex];
  }
  
  // If even number of elements, this returns the average of the two middle elements
  return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
}

module.exports = calculateMedian;
