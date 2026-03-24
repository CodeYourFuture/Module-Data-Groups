// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // validate input
  if (!Array.isArray(list)) return null;

  // keep only finite numbers (ignore numeric strings and other types)
  const numbers = list.filter(
    (x) => typeof x === "number" && Number.isFinite(x)
  );
  if (numbers.length === 0) return null;

  // sort numerically (we can sort the filtered array in-place)
  numbers.sort((a, b) => a - b);

  const n = numbers.length;
  const mid = Math.floor(n / 2);

  // odd length -> return middle element
  if (n % 2 === 1) return numbers[mid];

  // even length -> average of two middle values
  return (numbers[mid - 1] + numbers[mid]) / 2;
}

module.exports = calculateMedian;
