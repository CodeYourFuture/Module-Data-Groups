// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).


function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }

  // Filter non-numbers 
  const filteredList = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (filteredList.length === 0) {
    return null;
  }

  // We can safely sort filteredList directly 
  filteredList.sort((a, b) => a - b);

  const mid = Math.floor(filteredList.length / 2);

  if (filteredList.length % 2 === 0) {
    return (filteredList[mid - 1] + filteredList[mid]) / 2;
  } 
  else {
    return filteredList[mid];
  }
}

module.exports = calculateMedian;
