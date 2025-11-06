// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// // or 'list' has mixed values (the function is expected to sort only numbers).

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   return median;
// }

module.exports = calculateMedian;
function calculateMedian(list) {
  // 1. First, check if we even got an array
  if (!Array.isArray(list)) {
    return null; // If it's not an array, return nothing
  }

  // 2. Only keep the actual numbers from the array
  const onlyNumbers = [];
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (typeof item === "number" && !isNaN(item)) {
      onlyNumbers.push(item); // Add to our new array if it's a real number
    }
  }

  // 3. If no numbers found, return nothing
  if (onlyNumbers.length === 0) {
    return null;
  }

  // 4. Sort the numbers from smallest to largest
  // We use slice() to make a copy so we don't change the original array
  const sortedNumbers = onlyNumbers.slice().sort(function (a, b) {
    return a - b; // This tells sort to compare numbers properly
  });

  // 5. Find the middle position
  const middlePosition = Math.floor(sortedNumbers.length / 2);

  // 6. Calculate the median
  if (sortedNumbers.length % 2 === 0) {
    // If even number of items: average of two middle numbers
    const leftMiddle = sortedNumbers[middlePosition - 1];
    const rightMiddle = sortedNumbers[middlePosition];
    return (leftMiddle + rightMiddle) / 2;
  } else {
    // If odd number of items: just take the middle number
    return sortedNumbers[middlePosition];
  }
}