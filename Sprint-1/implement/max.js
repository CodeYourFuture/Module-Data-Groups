function findMax(elements) {
  elements = elements.filter((x) => typeof x === "number");
  return Math.max(...elements);
}

module.exports = findMax;
