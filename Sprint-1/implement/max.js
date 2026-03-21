function findMax(elements) {
  if (!Array.isArray(elements)) {
    return null;
  }

  const numericElements = elements.filter((item) => typeof item === "number");

  if (numericElements.length === 0) {
    return -Infinity;
  }

  return Math.max(...numericElements);
}

module.exports = findMax;
