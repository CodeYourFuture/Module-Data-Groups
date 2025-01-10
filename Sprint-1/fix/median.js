// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const sortedList = list.sort(function(a, b){return a - b});
  const middleIndex = Math.floor(sortedList.length / 2);
  let median;
  if (sortedList.length % 2 !== 0){
    median = sortedList[middleIndex];
    return median;
  }
  else{
    median = ((sortedList[middleIndex] + sortedList[middleIndex - 1]) / 2)
  }
  return median;
}
//console.log(calculateMedian([1, 2, 3, 4]))
module.exports = calculateMedian;
