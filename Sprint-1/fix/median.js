// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  let newArray = [...list].sort();
  let isEven = newArray.length % 2 == 0;
  const middleIndex = Math.floor(list.length / 2);
  if (isEven) {
    const median = (newArray[middleIndex] + newArray[middleIndex - 1]) / 2;
    return median;
  } else {
    const median = newArray[middleIndex];
    return median;
  }
}
console.log(calculateMedian([4, 3, 5]));

module.exports = calculateMedian;
