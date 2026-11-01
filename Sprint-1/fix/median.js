// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {
  list.forEach((item) => {
    if (typeof item !== "number")
      throw new Error("input should be a number value");
  });

  const sortedList = list.slice().sort((a, b) => a - b);

  // implement median part
  const middleIndex = Math.floor(sortedList.length / 2);
  const median = sortedList[middleIndex];
  return median;
}

module.exports = calculateMedian;
