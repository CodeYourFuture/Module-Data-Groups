// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const numbers = list.filter((item) => typeof item === "number");
  const copy = Array.from(numbers);
  const newArray = copy.sort();

  const middleIndex = Math.floor(newArray.length / 2);
  const median = newArray.splice(middleIndex, 1)[0];
  return median;
}
module.exports = calculateMedian;
