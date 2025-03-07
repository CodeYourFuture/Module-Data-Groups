// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  list.sort((a, b) => a - b);
  if (list.length % 2 === 0) {
    let middleIndex = Math.floor(list.length / 2);
    let median = (list[middleIndex - 1] + list[middleIndex]) / 2;
    return median;  // returns the average value of the two middle elements
    
  } else {
    let middleIndex = Math.floor(list.length / 2);
    let median = list[middleIndex];
    return median; // returns middle element value
  }
}

module.exports = calculateMedian;
