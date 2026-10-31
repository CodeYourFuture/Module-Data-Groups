// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   return median;
// }

// module.exports = calculateMedian;

function calculateMedian(list) {
  if (list.length % 2 === 1) {
    const middleIndex = Math.floor(list.length / 2);
    return list[middleIndex];
  }
  const rightMiddleIndex = Math.floor(list.length / 2 - 1);
  const leftMiddleIndex = Math.floor(list.length / 2);
  return (list[rightMiddleIndex] + list[leftMiddleIndex]) / 2;
}

module.exports = calculateMedian;
