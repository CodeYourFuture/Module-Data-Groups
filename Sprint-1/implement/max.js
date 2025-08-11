function findMax(arr) {
  // Keep only the number values
  const numbers = arr.filter(item => typeof item === 'number');

  // If no numbers found, return -Infinity
  if (numbers.length === 0) {
    return -Infinity;
  }

  // Return the biggest number
  return Math.max(...numbers);
}

module.exports = findMax;
