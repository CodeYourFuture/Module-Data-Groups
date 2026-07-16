// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number" && typeof list[i] === " ") {
    return null;
  }
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}
}
let nums = [1, 2, 3];
console.log(calculateMedian(nums));

module.exports = calculateMedian;
