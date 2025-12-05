// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  const numbers = list
    .filter((val) => typeof val === "number")
    .sort((a, b) => a - b);

  if (numbers.length === 0) {
    return null;
  }

  const middleIndex = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    const lowerMiddle = numbers[middleIndex - 1];
    const upperMiddle = numbers[middleIndex];
    return (lowerMiddle + upperMiddle) / 2;
  } else {
    return numbers[middleIndex];
  }
}

module.exports = calculateMedian;
