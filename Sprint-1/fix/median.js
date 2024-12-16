// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

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
