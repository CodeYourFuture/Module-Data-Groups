// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

const calculateMedian = (list) => {
  list.sort((a, b) => {
    return a - b;
  });

  if (list.length % 2 === 0) {
    const middleIndex = list.length / 2;
    console.log((list[middleIndex - 1] + list[middleIndex]) / 2);
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  }
  else {
    return list[Math.floor(list.length / 2)];
  }
}

calculateMedian([3,5,5,4]);

module.exports = calculateMedian;
