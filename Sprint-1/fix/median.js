// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  list.sort();
  const len = list.length;

  if (len % 2 === 0) {
    const mid = len / 2 - 1;
    const middleTwo = list.slice(mid, mid + 2);
    return (middleTwo[0] + middleTwo[1]) / 2;
  } else {
    const index = Math.floor(len / 2);
    const median = list[index];
    return median;
  }
}

module.exports = calculateMedian;
