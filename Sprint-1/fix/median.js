// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).
/*
  The original implementation is incorrect because:
  - It mutates the input array with splice.
  - It doesn't handle non-number or mixed-type arrays.
  - It doesn't sort the numbers before finding the median.
  The second implementation is closer, but it returns null if the array contains any non-number values, instead of ignoring them and sorting only numbers.
  The correct approach is:
    - Filter out only numbers (ignoring non-numbers).
    - If there are no numbers, return null.
    - Sort the numbers.
    - Calculate the median.
*/




function calculateMedian(list) {
  if (!Array.isArray(list)) return null;
  const numbers = list.filter((item) => typeof item === "number" && !isNaN(item));
  if (numbers.length === 0) return null;
  numbers.sort((a, b) => a - b);

  const middleIndex = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  } else {
    return numbers[middleIndex];
  }
}
module.exports = calculateMedian;
