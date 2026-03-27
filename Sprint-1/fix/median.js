// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // if list is not an array return null.
  if (!Array.isArray(list)) {
    return null;
  }

  // filter the list to include only valid numbers (excludes Infinity, -Infinity, and NaN)
  const numbers = list.filter(
    (item) => typeof item === "number" && Number.isFinite(item)
  );

  // if numbers array is empty return null.
  if (numbers.length === 0) {
    return null;
  }

  // sort the numbers in the number array in ascending order.
  numbers.sort((a, b) => a - b);

  // find the middle index and store it in a variable.
  const middleIndex = Math.floor(numbers.length / 2);

  // if its an even array there are two middle indexes, so add them together and divide by two.
  if (numbers.length % 2 === 0) {
    return (numbers[middleIndex] + numbers[middleIndex - 1]) / 2;
  }
  // for odd arrays return middle index.
  return numbers[middleIndex];
}

module.exports = calculateMedian;
