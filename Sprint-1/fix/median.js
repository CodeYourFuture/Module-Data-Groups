// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).


function calculateMedian(list) {
  // Ensure list is an array
  if (!Array.isArray(list)) return null;

  // Convert all values to numbers and remove invalid entries e.g strings etc 
  const numericList = list.filter(
    item => typeof item === "number" && !Number.isNaN(item)
  );

  // If no valid numbers remain, return null
  if (numericList.length === 0) return null;

  // Sort the numbers in ascending order using .sort arrow function 
  const sorted = [...numericList].sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);

  // Return median for even and off lengths of list 
  if (sorted.length % 2 !== 0) {
    return sorted[middleIndex];
  } else {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
