// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) return null;
  //If the items are not an array or if the array is empty return null
  const numbers = list.filter((num) => typeof num === "number");
  if (numbers.length === 0) return null;
  //checks the array before sorting and removing anything that is not a valid item ie not a number.
  const sortedList = [...numbers].sort((a, b) => a - b);
  //creates a copy, after sorting so the original items are kept the same.
  const middleIndex = Math.floor(sortedList.length / 2);
  //finds the median position
  if (sortedList.length % 2 === 0) {
    // if the list length is even, average the two middle numbers
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
    //It finds the middles of the array and selects the number before the middle and and adds the next number then divides by 2 when number is even.
  }
  return sortedList[middleIndex];
  //if it is odd it returns the middle number
};
//checking
// console.log(calculateMedian([1, 2, "3", null, undefined, 4])); // 2
// console.log(calculateMedian([1, 2, 3, 4])); // 2.5
// console.log(calculateMedian([110, 20, 0])); //20
// console.log(calculateMedian([1, "apple", 2, null, 5, undefined])); // 2
// console.log(calculateMedian("not array")); // null
// console.log(calculateMedian("")); // null
module.exports = calculateMedian;

//check list
// Is the input valid? ie not a string?
//Validate what is valid input should be
// sort input and put in new array
//calculate median
//check output
