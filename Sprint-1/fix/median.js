// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // this statement checks that the input passed to the function calculateMeddian is an array
  if (!Array.isArray(list)) {
    return null;
  }

  // this statement filters valid numbers and make variable validNumbers to hold a reference to the new array
  const validNumbers = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  // This statement returns `null` if the length of the array is strictly equals to zero
  // i.e empty array or invalid array
  if (validNumbers.length === 0) {
    return null;
  }

  // this statement creates a copy of the array and variable copyArray will hold a reference to the new array
  const copyArray = validNumbers.slice();

  // this statement uses sort function to arrange the elements in the array in ascending order.
  //  sort function mutates the `copyArray` so, sortArray and copyArray hold reference to the same array in memory
  const sortArray = copyArray.sort((a, b) => a - b);
}

module.exports = calculateMedian;
