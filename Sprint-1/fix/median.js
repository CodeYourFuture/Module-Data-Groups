// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    // check whether the input is array
    return null;
  }
  const new_list = list.filter(
    (item) => typeof item === "number" && !isNaN(item) // filter input and create an array that include just numbers
  );
  if (new_list.length === 0) {
    // check if array is empty, excluded any non-numeric items
    return null;
  }
  const sortedList = new_list.slice().sort((a, b) => a - b); //sort elements inside array in ascending order to calculate median
  const middleIndex = Math.floor(sortedList.length / 2); // calculate middle index array element
  if (sortedList.length % 2 === 0) {
    //check if array has even quantity elements
    const median = (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2; // calculate median
    return median;
  } else {
    return sortedList[middleIndex];
  }
}

const arr = ["apple", null, undefined];
calculateMedian(arr);
console.log(arr);

console.log(calculateMedian(arr));

module.exports = calculateMedian;
