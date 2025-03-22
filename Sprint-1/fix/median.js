// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const arrLength = list.length;
  const middleIndex = Math.floor(arrLength / 2);
  if (arrLength % 2 === 0) {
    const num2 = list[middleIndex - 1];
    const num1 = list[middleIndex];
    return (num1 + num2) / 2;
  } else {
    return list[middleIndex];
  }
}

module.exports = calculateMedian;
