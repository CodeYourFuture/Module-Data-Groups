// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  const numbers = list.filter((item) => typeof item === "number");

  if (numbers.length === 0) {
    return null;
  }

  numbers.sort((a, b) => a - b);

  const middleIndex = Math.floor(numbers.length / 2);

  if (numbers.length % 2 !== 0) {
    const median = numbers.splice(middleIndex, 1)[0];
    return median;
  } else {
    const middleTwo = numbers.splice(middleIndex - 1, 2);
    const median = (middleTwo[0] + middleTwo[1]) / 2;
    return median;
  }
}

module.exports = calculateMedian;
