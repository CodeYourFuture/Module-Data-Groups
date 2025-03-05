function findMax(elements) {
  const numericElements = elements.filter((el) => typeof el === "number");

  if (numericElements.length === 0) return -Infinity;

  return Math.max(...numericElements);
}

module.exports = findMax;
