function findMax(elements) {
  if (!Array.isArray(elements)) return -Infinity;

  const nums = elements.filter((n) => typeof n === "number" && !isNaN(n));

  if (nums.length === 0) return -Infinity;

  return nums.reduce((max, curr) => (curr > max ? curr : max), -Infinity);
}

module.exports = findMax;
