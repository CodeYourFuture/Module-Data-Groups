// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // If input is not an array
  if (Array.isArray(list) === false) {
    return null;
  }

  // Declare empty array so input array is not modified.
  const sortedList = [];

  // Populate sortedList with valid numbers. Numbers in string format is not processed.
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number" && !isNaN(list[i])) {
      sortedList.push(list[i]);
    }
    // else if to processes numbers in strings.
    /*
        else if (typeof list[i] === 'string' && !isNaN(Number(list[i]))) {
            sortedList.push(Number(list[i]));
        } */
  }

  // Throw error if list is empty or has no numbers
  if (sortedList.length === 0) {
    //throw new Error('null');
    return null;
  }

  // Sort the array numerically
  sortedList.sort((a, b) => a - b);

  const mid = Math.floor(sortedList.length / 2);

  // If length is odd, return middle element
  if (sortedList.length % 2 !== 0) {
    return sortedList[mid];
  }

  // If length is even, return average of two middle elements
  return (sortedList[mid - 1] + sortedList[mid]) / 2;
}

module.exports = calculateMedian;
