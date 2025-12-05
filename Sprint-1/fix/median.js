// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) return null; // Must be an array with atleast one elemnt

  const numbers = list.filter(
    (x) => typeof x === "number" && Number.isFinite(x)
  ); // filters out non-numeric values

  if (numbers.length === 0) return null; // Must have at least one number

  const sorted = numbers.slice().sort((a, b) => a - b);
  // replaced unnecessary array clone 

  const mid = Math.floor(sorted.length / 2); // math.floor gives the correct index
  if (sorted.length % 2 === 1) {
    return sorted[mid]; // odd length; median is single centre value
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2; // even length; median is average of two centre values
  }
}

module.exports = calculateMedian;
