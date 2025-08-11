function findMax(elements) {
  return elements
    .filter((el) => typeof el === "number")
    .reduce((max, num) => (num > max ? num : max), -Infinity);
}

module.exports = findMax;