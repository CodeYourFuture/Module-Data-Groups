// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  //check if the input is an array
  if (!Array.isArray(list)) {
    return null;
  }

  //check if list consists of numbers
  list = list.filter((item) => typeof item === "number" && !isNaN(item));

  //if nothing remained in the updated list, it was non-numbers, so that should return null

  if (list.length === 0) return null;

  //sort a copy of the array
  const listCopy = Array.from(list);
  const sortedList = listCopy.sort((a, b) => a - b);

  //find the position of the median
  let medianPosition = (list.length + 1) / 2 - 1;

  //if integer, that will be an exact position
  if (medianPosition % 1 === 0) {
    let median = sortedList[medianPosition];
    return median;
  } else {
    // if not a whole number, we need to average the 2 middle numbers
    let mid1 = Math.floor((list.length + 1) / 2) - 1;
    let mid2 = Math.floor((list.length + 1) / 2);

    median = 0.5 * (sortedList[mid1] + sortedList[mid2]);
    return median;
  }
}

// console.log(calculateMedian([1, 2, 3, 4, 5, 6, 7, 8]));

module.exports = calculateMedian;
