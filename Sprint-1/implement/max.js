function findMax(elements) {
  const numericElements = elements.filter((item) => typeof item === "number");
  if (numericElements === 0) {
    return -Infinity;
  }
  return Math.max(...numericElements);
}

module.exports = findMax;
