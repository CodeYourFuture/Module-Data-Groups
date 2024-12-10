// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.slice(middleIndex, middleIndex + 1)[0];
  return median;
}

module.exports = calculateMedian;

console.log(calculateMedian([1, 2, 3, 4, 5]));
