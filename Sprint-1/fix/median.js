// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory


function calculateMedian(list) {
 const sortList = list.sort((a, b) => (a - b));
 const middleIndex = Math.floor(sortList.length / 2);

  if (sortList.length % 2 !== 0) {
   
    return sortList[middleIndex];
  } 
  else {
    return (sortList[middleIndex - 1] + sortList[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
