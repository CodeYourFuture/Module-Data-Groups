function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return -Infinity;

  const numbers = arr.filter((n) => typeof n === "number" && !isNaN(n));

  if (numbers.length > 0) {
    return Math.max(...numbers);
  }

  return arr[arr.length - 1];
}

module.exports = findMax;
