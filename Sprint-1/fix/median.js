// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }

  const numbersArray = list.filter((item) => typeof item === "number");
  numbersArray.sort((a, b) => a - b);
  const middleIndex = Math.floor(numbersArray.length / 2);

  if (
    list.every(
      (item) => typeof item === "string" || item === null || item === undefined
    )
  ) {
    return null;
  }

  if (numbersArray.length % 2 === 0) {
    const tempMedian =
      numbersArray[middleIndex] + numbersArray[middleIndex - 1];
    const median1 = tempMedian / 2;
    return median1;
  } else {
    const middleIndex = Math.floor(numbersArray.length / 2);
    const median = numbersArray.splice(middleIndex, 1)[0];
    return median;
  }
}

module.exports = calculateMedian;

myArray = calculateMedian(["11", "mango"]);
console.log(myArray);
