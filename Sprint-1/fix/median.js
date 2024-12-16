// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  list.sort((a, b) => a - b);
  const middleIndex = Math.floor(list.length / 2);
  if (list.length % 2 !== 0)
  {
    return list[middleIndex];
  }
  else
  {
    return (list[middleIndex]+list[middleIndex-1])/2
  }
}

module.exports = calculateMedian;
