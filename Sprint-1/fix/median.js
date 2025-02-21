// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const sortedList = [...list].sort((a, b)=> a - b);
  const length = sortedList.length;
  const middleIndex = Math.floor(list.length / 2);
  
if (length % 2 !== 0) {
  return sortedList[middleIndex]
} else{
  return ( sortedList[middleIndex -1] + sortedList[middleIndex]) / 2
}

}

module.exports = calculateMedian;
