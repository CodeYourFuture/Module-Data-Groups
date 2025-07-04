// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // checks if "list" is an array if not return's null.
  if(!Array.isArray(list)) return null;

  // filter the non number values out of an array like "strings", "null's and undefined"
  const numbers = list.filter( value => typeof value === `number` && !isNaN(value));
  
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian;
