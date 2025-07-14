// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }
  const numbers = [];
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      numbers.push(list[i]);
    }
  }

  if (numbers.length === 0) return null;

  numbers.sort((a, b) => a - b);
  const mid = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 1) {
    return numbers[mid];
  } else {
    return (numbers[mid - 1] + numbers[mid]) / 2;
  }
}

module.exports = calculateMedian;
