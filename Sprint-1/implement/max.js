function findMax(elements) {
  if (elements.length < 1) {
    return -Infinity;
  }

  // Filter only numbers
  const numericElements = elements.filter(el => Number.isFinite(el));

  if (numericElements.length === 0) {
    return -Infinity;
  }

  // Use Math.max on the numeric elements
  return Math.max(...numericElements);
}

module.exports = findMax;

