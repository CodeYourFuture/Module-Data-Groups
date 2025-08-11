function findMax(elements) {
  // Filter only numeric elements
  const numericElements = elements.filter((el) => typeof el === 'number');

  // If no numeric elements, return -Infinity
  if (numericElements.length === 0) {
    return -Infinity;
  }

  // Find the maximum number
  return Math.max(...numericElements);
}

module.exports = findMax;
