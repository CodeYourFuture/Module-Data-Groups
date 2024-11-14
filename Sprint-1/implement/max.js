function findMax(elements) {
  // Filter out non-numeric values
  const numericElements = elements.filter(element => typeof element === 'number');

  // Return -Infinity for an empty array or an array with no numeric values
  if (numericElements.length === 0) {
    return -Infinity;
  }

  // Return the maximum value from the array
  return Math.max(...numericElements);
}

module.exports = findMax;
