// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  //checking if the provided list is an Array
  if (!Array.isArray(list)) {
    return null;
  }

  //need to filter the array to check only for numbers
  let filteringArr = list.filter((item) => {
    return typeof item === "number";
  });

  //handel no numbers
  if (filteringArr.length === 0) {
    return null;
  }
  // sorting the array
  filteringArr.sort((a, b) => a - b);

  // calculating middle index
  const middleIndex = Math.floor(filteringArr.length / 2);

  // finding Odd length
  if (filteringArr.length % 2 === 1) {
    const median = filteringArr[middleIndex];

    return median;
  } else {
    return (filteringArr[middleIndex - 1] + filteringArr[middleIndex]) / 2;
  }

  // return median;
}

module.exports = calculateMedian;
