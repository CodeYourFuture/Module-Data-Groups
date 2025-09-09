function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return -Infinity;

  let max = -Infinity;

  for (const item of arr) {
    if (typeof item === "number" && item > max) {
      max = item;
    }
  }

  return max;
}

module.exports = findMax;

