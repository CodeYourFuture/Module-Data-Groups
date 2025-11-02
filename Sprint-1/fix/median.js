// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   return median;
// }

// Ignore this Commit
// It is not my solution I got help with AI. I confess I need to undestand more those 3 methodos to think
//and get to this solution
// I will come back to it later. 

function calculateMedian(list) {
  // non-array or empty inputs
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  //Filter non-numeric values and create a new array of only numbers

  const numericList = list.filter(
    (item) => typeof item === "number" && Number.isFinite(item)
  );

  // If after filtering, there are no numbers left, return null
  if (numericList.length === 0) {
    return null;
  }

  //Sort the numeric list
  const sortedList = [...numericList].sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedList.length / 2);

  //Calculate the median based on list length (odd or even)
  if (sortedList.length % 2 === 1) {
    // Odd number of elements: return the middle element
    return sortedList[middleIndex];
  } else {
    // Even number of elements: return the average of the two middle elements
    const mid1 = sortedList[middleIndex - 1];
    const mid2 = sortedList[middleIndex];
    return (mid1 + mid2) / 2;
  }
}

module.exports = calculateMedian;
