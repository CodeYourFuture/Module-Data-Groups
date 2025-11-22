// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // checks if "list" is an array if not return's null.
  if (!Array.isArray(list)) return null;

  // filter the non number values out of an array like "strings", and checks for " Infinte, -Infinte, null's and undefined"
  const numbers = list.filter(value => Number.isFinite(value));

  // if no numbers are left return null
  if (numbers.length === 0) return null;

  // sort numbers into ascending order
  numbers.sort(function (a, b) {
    return a - b;
  });

  // finds the middle index based on filtered numbers length
  const middleIndex = Math.floor(list.length / 2);

  // return the correct median based on if its even or odd
  if (numbers.length % 2 === 0) {
    // even length average of two middle numbers
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  } else {
    // odd length returns the middle number
    return numbers[middleIndex];
  }
}
