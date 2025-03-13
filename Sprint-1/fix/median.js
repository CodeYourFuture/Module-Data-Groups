// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const copyList = [...list];
  const middleIndex = Math.floor(copyList.length / 2);
  if (copyList.length % 2 !== 0) {
    const median = copyList.splice(middleIndex, 1)[0];
    return median;
  } else {
    const middleEvenIndex = middleIndex - 1;
    const middleEvenIndex2 = copyList.length / 2;
    const sum = list[middleEvenIndex] + list[middleEvenIndex2];
    const evenNum = sum / 2;
    return evenNum;
  }
}

module.exports = calculateMedian;
