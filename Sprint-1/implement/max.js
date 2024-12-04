function findMax(elements) {
  // Filter out non-numeric values
  const numericElements = elements.filter(
    (element) => typeof element === "number"
  );

  // If no numeric elements exist, return -Infinity
  if (numericElements.length === 0) {
    return -Infinity;
  }

  // Return the largest numeric element
  return Math.max(...numericElements);
  //   return Math.max.apply(null, numericElements);
  //   return elements.reduce((a, b) => Math.max(a, b), -Infinity);
}

module.exports = findMax;
