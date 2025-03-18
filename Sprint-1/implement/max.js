function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new TypeError("Expected an array");
  }
  const numericElements = elements.filter(
    (element) => typeof element === "number"
  );
  if (numericElements.length > 0) {
    return Math.max(...numericElements);
  } else {
    return -Infinity;
  }
}

module.exports = findMax;
