function findMax(arr) {
  return arr
    .filter((item) => typeof item === "number" && Number.isFinite(item))
    .reduce((acc, num) => (num > acc ? num : acc), -Infinity);
}

module.exports = findMax;
