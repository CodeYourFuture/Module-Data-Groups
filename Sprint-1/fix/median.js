// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;
  if (list.length == 0) return null;

  let numeric = false;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      numeric = true;
    }
  }
  if (!numeric) return null;

  const numbers = list.filter((n) => typeof n === "number");

  numbers.sort((a, b) => a - b);

  const middleIndex = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  } else {
    return numbers[middleIndex];
  }
}

module.exports = calculateMedian;
