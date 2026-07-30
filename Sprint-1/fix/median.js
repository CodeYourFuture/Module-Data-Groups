// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Filter out non-numeric values
  // const numbers = list.filter((x) => typeof x === "number");
  const numbers = [];
  for (const x of list) {
    if (Number.isFinite(x)) {
      numbers.push(x);
    }
  }
  if (numbers.length === 0) {
    return null;
  }
  // Sort the numbers
  numbers.sort((a, b) => a - b);
  const middleIndex = Math.floor(numbers.length / 2);
  // for even length arrays
  if (numbers.length % 2 === 0) {
    const left = numbers[middleIndex - 1];
    const right = numbers[middleIndex];
    return (left + right) / 2;
  }
  //console.log(`middleIndex: ${middleIndex}`);
  const median = numbers[middleIndex];
  return median;
}
module.exports = calculateMedian;
