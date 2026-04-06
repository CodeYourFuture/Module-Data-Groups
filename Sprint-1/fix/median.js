// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  //to make sure that the argument must be array
  if (!Array.isArray(list)) return null;

  //If the argument past into is an array, at least have 1 number items
  if (list.length === 0) return null;

  //to make sure that the argument array must only contain number.
  if (!list.every((x) => typeof x === "number" && !isNaN(x))) return null;

  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian;
