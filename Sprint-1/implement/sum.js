function findMax(arr) {
  if (arr.length === 0) return -Infinity;

  const validNumbers = arr.filter((item) => typeof item === "number");

  if (validNumbers.length === 0) return -Infinity;

  return Math.max(...validNumbers);
}

module.exports = findMax;
