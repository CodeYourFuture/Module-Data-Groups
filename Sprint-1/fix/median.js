// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

// Old Code:

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   return median;
// }

// Explanation:
// The original implementation has several mistakes:
// 1 - .splice() mutates or changes the original array. We don't want this to happen.
// 2 - We actually don't need .splice() or any other method to find a median.
// 3 - We must sort the array before we search for the median.
// 4 - We should check if the 'list' parameter actually has numbers, otherwise try to filter
// out all non-numeric values and throw an error or return null if there are no numeric values.


// Example of a function calculating median and returning null in case no numeric values provided.

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const onlyNumberList = list.filter(item => typeof item === 'number' && !isNaN(item));

  if (!onlyNumberList.length) {
    return null;
  } else {
    const sortedList = onlyNumberList.sort((current, next) => current - next);
    const indexNearMiddleOfArray = Math.floor(sortedList.length / 2);
    if (sortedList.length % 2 === 0) {
      return (sortedList[indexNearMiddleOfArray - 1] + sortedList[indexNearMiddleOfArray]) / 2;
    } else {
      return sortedList[indexNearMiddleOfArray];
    }
  }
}

module.exports = calculateMedian;
