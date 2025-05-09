// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!list) {
    return "List is empty";
  }
  const middleIndex = Math.floor(list.length / 2);
  let median = -1;
  if (list.length % 2 === 1) {
    median = list[middleIndex];
  } else {
    median = (list[middleIndex] + list[middleIndex - 1]) / 2;
  }
  return median;
}
module.exports = calculateMedian;
