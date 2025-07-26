// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const onlyNumber = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  if (onlyNumber.length === 0) {
    return null;
  }

  const inOrder = onlyNumber.slice().sort((a, b) => a - b);
  if (inOrder.length % 2 !== 0) {
    return inOrder[Math.floor(inOrder.length / 2)];
  } else {
    const firstMiddle = inOrder.length / 2 - 1;
    const secondMiddle = inOrder.length / 2;
    return (inOrder[firstMiddle] + inOrder[secondMiddle]) / 2;
  }
}
console.log(calculateMedian([1, 2, 3, 4, 5]));
module.exports = calculateMedian;
