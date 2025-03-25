// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

[1,2,3,4]
function calculateMedian(list) {
  if (list.length % 2 == 1){
    // odd length array
    const middleIndex = Math.floor(list.length / 2);
    const median = list[middleIndex];
    return median;
  } else {
    // even length array
    const middleIndex = Math.floor(list.length / 2) - 1;
    let middle = [list[middleIndex], list[middleIndex + 1]];
    let median = (middle[0] + middle[1]) / 2
    return median;
  }

}

module.exports = calculateMedian;
