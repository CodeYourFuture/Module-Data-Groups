// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // To correct the implementation with the test feedback, we need first to ensure that the function detects that list is an array of numbers and returns null if it is not.
  if (!Array.isArray(list)) return null;

  // Secondly, we need to implement a function that filter out non numeric values and NAN.
  const numbers = list.filter(
    (item) => typeof item === "number" && !Number.isNaN(item)
  );

  // Thirdly, we need  to make sure that the function returns null if the list is empty or has no numeric values.
  if (numbers.length === 0) {
    return null;
  }

  // Then, we need to make sure that the function sorts the numbers in ascending order before calculating the median.
  const sorted = [...numbers].sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);

  // Finally, we need to make sure that the function returns the average of the two middle numbers if the list has an even number of elements.
  if (sorted.length % 2 === 0) {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  } else {
    return sorted[middleIndex];
  }
}

//const middleIndex = Math.floor(list.length / 2);
//const median = list.splice(middleIndex, 1)[0];
//return median;}

module.exports = calculateMedian;
