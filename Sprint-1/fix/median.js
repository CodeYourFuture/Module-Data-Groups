// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// median.js
function calculateMedian(list) {
  // 1) Must be an array
   if (!Array.isArray(list) || list.length === 0){
    return null;
  }
  // 2) Keep only real numeric values 
  const numbers = list.filter((item) => typeof item === "number");

  if (numbers.length === 0) {
    return null;
  }

  // 4) Sort a copy numerically (don't mutate the original)
  const sorted =[...numbers].sort((a, b) => a - b);

  // 5) Pick middle index
  const middleIndex = Math.floor(sorted.length / 2);

  // 6) Odd length -> middle element; Even length -> average of two middle elements
 
  if (sorted.length % 2 === 0) {
    // even length → average of middle two
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  }

  // odd length → middle element
   return sorted[middleIndex];
}

module.exports = calculateMedian;