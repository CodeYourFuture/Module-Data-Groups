// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

//function to check if list contains numbers only
function IsNumbersOnlyArray(checkArr) {
  // using every and typeof to check for all number
  return checkArr.every((item) => typeof item === "number");
}

// function to sort numbers into ascending order
function sortNumberArray(sortArr) {
  sortedArray = sortArr.slice().sort((a, b) => a - b);
  return sortedArray;
}

function calculateMedian(arr) {
  if (IsNumbersOnlyArray(arr)) {
    const sortedList = sortNumberArray(arr);
    const lengthOfList = sortedList.length;
    console.log(`Sorted list: ${sortedList}`);
    // checking if array is of odd or even length
    if (lengthOfList % 2 === 0) {
      // for array of even length
      const medianLocator = Math.floor(lengthOfList / 2);
      const median =
        (sortedList[medianLocator - 1] + sortedList[medianLocator]) / 2;
      return median;
    }
    // we split the sorted list into 2 to find the median
    if (lengthOfList % 2 != 0) {
      medianLocator = Math.ceil(lengthOfList / 2);
      median = sortedList[medianLocator - 1];
      return median;
    }
  } else {
    return null;
  }
}
//console.log(calculateMedian([1,2,3,4,5,6,7,8,9,10])); //has worked for ordered list
//console.log(calculateMedian([7, 3, 9, 1, 5, 10, 2, 8, 'a', 6])); // has also worked
console.log(calculateMedian([5, 2, 9, 1, 7]));
//console.log(calculateMedian([5,2,9,1]));
module.exports = calculateMedian;
