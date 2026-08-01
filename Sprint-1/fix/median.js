// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (Array.isArray(list)) {
    // [...list] creates a shallow copy
    const listNumberOnlyAsc = [...list].filter(
      (item) => !isNaN(item) && item !== null
    );
    if (listNumberOnlyAsc == undefined || listNumberOnlyAsc == 0) {
      return null;
    }
    const listPureNumber = [...listNumberOnlyAsc].filter(
      (item) => typeof item == "number"
    );
    const listSorted = [...listPureNumber].sort((a, b) => a - b);

    if (listSorted.length % 2 === 1) {
      const middleIndex = Math.floor(listSorted.length / 2);
      const median = [...listSorted].splice(middleIndex, 1)[0]; //code '.splice(middleIndex,1)' means remove the middle index num in array and put it in a new array, '[0]' is the first item in this new array
      return median;
    } else {
      //retrieve the second middle number from the 2 middle numbers, and use it to retrieve the first middle number amd calculate the median
      const secondMiddleIndex = Math.floor(listSorted.length / 2);
      const median =
        (listSorted[secondMiddleIndex - 1] + listSorted[secondMiddleIndex]) / 2;
      return median;
    }
  } else {
    return null;
  }
}

module.exports = calculateMedian;
