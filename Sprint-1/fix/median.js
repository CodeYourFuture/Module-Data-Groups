// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {

  const sortedList = list.toSorted((a,b) => a - b);

  const middleIndex = Math.floor(list.length / 2);

  if (list.length % 2 === 0){
    return (sortedList[middleIndex -1] + sortedList[middleIndex])/2;
  }

  const median = sortedList.splice(middleIndex, 1)[0];
  return median;
}

calculateMedian([110, 20, 0]);

module.exports = calculateMedian;
