function findMax(arr) {
  const numbers = arr.filter((item) => typeof item === "number");
  if (numbers.length === 0) {
    return -Infinity;
  }
  return Math.max(...numbers);
}

module.exports = findMax;
