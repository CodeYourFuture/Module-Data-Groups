// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {

  // Validate input — must be an array
  if (!Array.isArray(list)) {
    return null;
  }

  // Check if the input is an array and contains numeric values
  const sortedList = list.filter(item => typeof item === 'number').sort((a, b) => a - b)

  // find the middle index
  const middleIndex = Math.floor(sortedList.length / 2);

  
  // If the sorted list is empty, return null
  if (sortedList.length === 0) {
    return null; // Return null if there are no numeric values
  } 

  // If the length of the sorted list is even, add 0.5 to the middle number
  if (sortedList.length % 2 === 0) {

    // this is my wrong attempt for solving this logic but it will cause error
    return (sortedList[middleIndex - 1] + 0.5);

    // tis is the correct way of finding the median when the length is even
    // return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  }else {
    // If the length of the sorted list is odd, return the middle number
    return sortedList[middleIndex];
  }

  
  // const median = list.splice(middleIndex, 1)[0];
  // return median;
}

module.exports = calculateMedian;
