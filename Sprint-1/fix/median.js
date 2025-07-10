// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  //Filtering out numbers from the array without changing the original array. Creates new array filteredNumbersOnly!
  const filteredNumbersOnly = list.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );
  //if  the array has no valid numbers, it returns null
  if (filteredNumbersOnly.length === 0) {
    return null;
  }
  //Sorting numbers in the array from the ascending order. Spread operator creates new array to avoid changing the original one.
  const sortedList = [...filteredNumbersOnly].sort((a, b) => a - b);
  //If the array length is odd, return the middle number
  if (sortedList.length % 2 === 1) {
    const middleIndex = Math.floor(sortedList.length / 2);
    return sortedList[middleIndex];
  } else {
    // If the array length is even, return the average of the two middle numbers.
    const midddleNum1 = sortedList[sortedList.length / 2 - 1];
    const midddleNum2 = sortedList[sortedList.length / 2];
    return (midddleNum1 + midddleNum2) / 2;
  }
}

module.exports = calculateMedian;
