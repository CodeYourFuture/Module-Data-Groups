// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  const initialValue = 0;
  const sumWithInitial = list.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
const index = list.length
  return sumWithInitial/index;
}


module.exports = calculateMedian;
