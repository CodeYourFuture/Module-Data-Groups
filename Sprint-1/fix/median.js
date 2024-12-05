function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  // Clone and sort the list to avoid modifying the input
  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    // For even-length lists, average the two middle numbers
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    // For odd-length lists, return the middle element
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;

