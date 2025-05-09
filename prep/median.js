function calculateMedian(numbers) {
  // Sort the array in ascending order
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);

  const length = sortedNumbers.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    // If even, return the average of the two middle numbers
    return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
  } else {
    // If odd, return the middle number
    return sortedNumbers[middle];
  }
}

function calculateMean(numbers) {
  if (numbers.length === 0) return 0; // Handle empty array case

  // Calculate the sum of all numbers
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  // Return the mean
  return sum / numbers.length;
}

module.exports = { calculateMedian, calculateMean };
