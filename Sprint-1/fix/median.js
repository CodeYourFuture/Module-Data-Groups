// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {

   // Check valid input -array
  if(!Array.isArray(list) || list.length === 0) return null;
  
  // Filter non-numeric values

  const numbers = list.filter(item => typeof item === 'number');
  if (numbers.length === 0) return null;

  // Sort the array

  const sorted = [...numbers].sort((a, b) => a - b);

   // Get the index of the middle item by rounding it using Math.floor()

  const mid = Math.floor(sorted.length/2);  
  
  // for Odd number of items return the middle element

  if (sorted.length % 2 !== 0) return sorted[mid];

  // for even number of items 
  return (sorted[mid - 1] + sorted[mid]) / 2;

}

module.exports = calculateMedian;


// Implementation fixed 
  
  // const middleIndex = Math.floor(list.length / 2);
  // const median = list.splice(middleIndex, 1)[0];
  // return median;
