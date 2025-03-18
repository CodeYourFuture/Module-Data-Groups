// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  if (list.length % 2 !== 0){
    const median = list[middleIndex];
    return median;
  }
  else{
    median = ((list[middleIndex] + list[middleIndex - 1]) / 2)
  }
  return median;
}
//console.log(calculateMedian([1, 2, 3, 4]))
module.exports = calculateMedian;
