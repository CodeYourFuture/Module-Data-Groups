function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) return null;

  // Filter out non-number values
  const numbers = list.filter(item => typeof item === "number");
  if (numbers.length === 0) return null;

  // Sort numbers in ascending order
  numbers.sort((a, b) => a - b);

  const middleIndex = Math.floor(numbers.length / 2);

  // If odd number of elements, return middle
  if (numbers.length % 2 !== 0) {
    return numbers[middleIndex];
  }

  // If even, return average of two middle numbers
  return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
}
module.exports = calculateMedian;