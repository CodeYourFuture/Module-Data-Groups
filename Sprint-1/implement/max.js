function findMax(elements) {
  // Filter only numeric values
  const nums = elements.filter(e => typeof e === "number");

  if (nums.length === 0) return -Infinity;

  return Math.max(...nums);
}

module.exports = findMax;
