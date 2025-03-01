// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  // sorting the array in ascending order
  const sortList = list.sort(function (a,b){return a-b});
  const middleIndex = Math.floor(sortList.length / 2);

  // if the array is even
  if (sortList.length %2 == 0)
  {
    // get the two medium value from the array 
    const num1 = sortList[middleIndex-1];
    const num2 = sortList[middleIndex];
    
    const median = (num1 + num2)/2;
    return median;

  }
  else 
  {
    return sortList[middleIndex];
  }

}

module.exports = calculateMedian;
