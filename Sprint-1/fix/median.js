// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;

  const numbers = [];
  for (const x of list) {
    if (typeof x === "number" && !isNaN(x)) {
      numbers.push(Number(x));
    }
  }
  if (numbers.length === 0) return null;
  numbers.sort((a, b) => a - b);
  const length = numbers.length;
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  } else {
    return numbers[middleIndex];
  }
}

module.exports = calculateMedian;
