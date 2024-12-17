// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);

  if (list.length % 2 ===0){
    const middleValue1 = list[middleIndex -1]
    const middleValue2 = list[middleIndex];
    return (middleValue1 + middleValue2) / 2;

  } else {
    return list[middleIndex];
  }
}

module.exports = calculateMedian;
