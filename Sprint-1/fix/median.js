// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null; // Return null if input is not an array
  }
  // Filter only numeric values
  const filteredlist = list.filter((item) => typeof item === "number");

  // Return null if no numeric values are present
  if (filteredlist.length === 0) {
    return null;
  }
  // sort the numbers
  filteredlist.sort((a, b) => a - b);
  const middleIndex = Math.floor(filteredlist.length / 2);

  // calculate and return median
  if (filteredlist.length % 2 === 0) {
    return (filteredlist[middleIndex - 1] + filteredlist[middleIndex]) / 2;
  } else {
    return filteredlist[middleIndex];
  }
}

module.exports = calculateMedian;
