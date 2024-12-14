// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  list = list.sort((a, b) => a - b);
  console.log(list);
  if (list.length % 2 == 0) {
    let sum = 0;
    let middleIndex = Math.floor(list.length / 2);
    let nextToMiddleIndex = Math.floor(list.length / 2) - 1;

    avarage = (list[middleIndex] + list[nextToMiddleIndex]) / 2;
    return avarage;
  } else {
    const middleIndex = Math.floor(list.length / 2);
    const median = list[middleIndex];
    return median;
  }
}
console.log(calculateMedian([5, 6, 1, 0, 8, 3]));

module.exports = calculateMedian;
