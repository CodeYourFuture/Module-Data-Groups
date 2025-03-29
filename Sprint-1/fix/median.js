// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

//function calculateMedian(list) {
  //const middleIndex = Math.floor(list.length / 2);
  //const median = list.splice(middleIndex, 1)[0];
  //return median;
//}

//module.exports = calculateMedian;

function calculateMedian(list) {
  if (!list || list.length === 0) {
    return undefined;
  }

  // Sort the list in ascending order
  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);

  // If the length of the list is odd, return the middle element
  if (sortedList.length % 2 === 0) {
    // If the length is even, return the average of the two middle values
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;


//======> solution to the right codes to solve the issue is below


function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return undefined; // Handle empty or non-array input
  }

  const sortedList = [...list].sort((a, b) => a - b); // Create a sorted copy

  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    // Even number of elements, average the two middle values
    const median1 = sortedList[middleIndex - 1];
    const median2 = sortedList[middleIndex];
    return (median1 + median2) / 2;
  } else {
    // Odd number of elements, the middle value is the median
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;
