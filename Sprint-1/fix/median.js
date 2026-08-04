function calculateMedian(list) {
  //Return null if list is null/undefined or not iterable
  if (!list || typeof list[Symbol.iterator] !== "function") {
    return null;
  }
  const numbers = Array.from(list).filter(Number.isFinite);

  if (numbers.length === 0) {
    return null;
  }

  numbers.sort((a, b) => a - b);

  const middleIndex = Math.floor(numbers.length / 2);

  // 5. Calculate median for even-length arrays
  if (numbers.length % 2 === 0) {
    const left = numbers[middleIndex - 1];
    const right = numbers[middleIndex];
    return (left + right) / 2;
  }

  // 6. Calculate median for odd-length arrays
  return numbers[middleIndex];
}
module.exports = calculateMedian;
