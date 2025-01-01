// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const sortedList = list.slice().sort((a, b) => a -b);

  const middleIndex = Math.floor(sortedList / 2);

  if (list.length % 2 ===0){
    const middleValue1 = sortedList[middleIndex -1]
    const middleValue2 = sortedList[middleIndex];
    return (middleValue1 + middleValue2) / 2;

  } else {
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;
