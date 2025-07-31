function calculateMedian(list) {
  // Check if input is a valid array
  if (!Array.isArray(list)) return null;

  // Filter out only numeric values
  const nums = list.filter(val => typeof val === 'number' && !isNaN(val));
  if (nums.length === 0) return null;

  // Clone and sort the array numerically
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  // Return median based on even or odd length
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}

module.exports = calculateMedian;
