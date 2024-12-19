// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const sortedList = [...list]; //clone the array
  sortedList.sort((a, b) => a - b); //sort the cloned array
  const middleIndex = Math.floor(sortedList.length / 2);
  if (sortedList.length % 2 === 0) {
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  } else {
    return list[middleIndex];
  }
}
module.exports = calculateMedian;
