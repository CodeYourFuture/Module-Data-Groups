// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

const calculateMedian = (list) => {
  const middleIndex = Math.floor(list.length / 2);
  const middleNumbers = list[middleIndex - 1] + list[middleIndex];
  const average = middleNumbers / 2;

  if (list.length % 2 === 0) {
    return average;
  } else return list[middleIndex];
};
console.log(calculateMedian([1, 2, 3, 5, 8, 6]));
module.exports = calculateMedian;
