// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if the input is an array and has at least one element
  if (!Array.isArray(list) || list.length === 0) return null;

  /*
   Make a copy of the input array "list" to avoid modifying the original array, by using the spread operator "...". 
   The spread operator creates a shallow copy of the array, thus we are avoiding any side effects on the original array.
   */
  const copyArray = [...list];

  /* 
  Filter out non-numeric values from the copied array by checking each "item" (or element) in the array. 
  The filter method creates a new array with all elements that pass the typeof and !isNaN tests implemented by the function. 
  Here, we are checking if each element of the list is a number and ensures it’s not the special NaN value (which is technically a number type, but not a valid number)
  */
  const numericList = copyArray.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  /* 
  If the filtered numericList is empty, return null. 
  This handles cases where the input array has no valid numbers.
  */
  if (numericList.length === 0) return null;

  /* 
  Sort the newly created array in ascending order using the sort() method. 
  Sort() uses the comparison function to compare two elements (a and b) and return a negative, zero, or positive value based on their order., when it is a negative result then (i.e. 10-80 = -70) the first element (a) is sorted before the second element (b). If it is a positive result (i.e. 80-10 = 70), then the second element (b) is sorted before the first element (a). 
  If it is zero, then their order remains unchanged.
  */
  numericList.sort((a, b) => a - b);

  /*
  Obtains the middle index of the sorted array. If the length of the array is even, it will return the lower middle index (by rounding down the result of the length divided by 2 using Math.floor). If the length is odd, it will return the middle number.
  */
  const middleIndex = Math.floor(numericList.length / 2);

  /*
  If the length of the array is even then the median is the average of the two middle numbers. 
  If this is the case then we return the average of the two middle numbers by accessing the elements at the indices middleIndex (the first index) and middleIndex - 1 (the last--or "second"--index) in the sorted numericList array.
  */
  if (numericList.length % 2 === 0) {
    return (numericList[middleIndex] + numericList[middleIndex - 1]) / 2;
  } else {
    return numericList[middleIndex];
  }

  /*
  There doesn't need to be a return value returned in this function because the tests will call the function and check the return value themselves.
  However, if I wanted to log the result to the console, I would finish the function by doing the following:

  let median;
if (numericList.length % 2 === 0) {
  median = (numericList[middleIndex - 1] + numericList[middleIndex]) / 2;
} else {
  median = numericList[middleIndex];
}
console.log("Median is:", median);
return median;
*/
}

module.exports = calculateMedian;
