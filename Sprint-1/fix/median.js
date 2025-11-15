// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

//function should not change the original array
//function should sort a copy of the array
//function should check if array has any non number values
//function should check if array has even number of integers or odd number before attempting to calculate median
//

function calculateMedian(list) {
  //first we create an array and copy only numbers into it
  //because we use array methods first we check we are passing an array
  let numberArray = [];

  function isNumber(value) {
    if (typeof value === "number") {
      return true;
    }

    return false;
  }

  function compareNumbers(a, b) {
    return a - b;
  }

  if (Array.isArray(list)) {
    //checking if we have been passed an array before picking numbers from any arrays
    numberArray = list.filter(isNumber);
    console.log(`new array ${numberArray}`);
  } else {
    return null;
  }

  numberArray.sort(compareNumbers); //sorting the copied array of numbers

  //quickly check if the new array is empty which means there were no numbers in original array
  if (numberArray.length === 0) {
    return null;
  }

  let middleIndex = 0;
  let middleIndexPlus1 = 0;

  if (numberArray.length % 2 === 0) {
    //if array has even number of items then a different median formula
    middleIndex = Math.floor(numberArray.length / 2);
    middleIndexPlus1 = middleIndex - 1;

    return (numberArray[middleIndex] + numberArray[middleIndexPlus1]) / 2;
  }

  return numberArray.splice(Math.floor(numberArray.length / 2), 1)[0];
}

module.exports = calculateMedian;
