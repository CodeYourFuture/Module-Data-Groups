function findMax(elements) {
  // filter out non-number items from elements
  elements = elements.filter((element) => typeof element === "number");

  // find maximum
  const max = Math.max(...elements);
  return max;
}

module.exports = findMax;
