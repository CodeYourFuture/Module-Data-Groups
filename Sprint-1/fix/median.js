// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // 1. Guard clause: Check if the input is an array
  if (!Array.isArray(list)) {
    return null;
  }

  // 2. Filter the array to keep only numbers
  const numbersOnly = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  // 3. Check for an empty array
  if (numbersOnly.length === 0) {
    return null;
  }

  // 4. Sort the numbers in ascending order
  numbersOnly.sort((a, b) => a - b);

  // 5. Calculate the middle index
  const middleIndex = Math.floor(numbersOnly.length / 2);

  // 6. Check if the length is even or odd
  if (numbersOnly.length % 2 === 0) {
    // The length is EVEN
    return (numbersOnly[middleIndex - 1] + numbersOnly[middleIndex]) / 2;
  } else {
    // The length is ODD
    return numbersOnly[middleIndex];
  }
}

module.exports = calculateMedian;
