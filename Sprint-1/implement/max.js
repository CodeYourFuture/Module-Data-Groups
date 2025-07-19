function findMax(elements) {
  const nums = elements.filter(Number.isFinite);
  return nums.length === 0 ? -Infinity : Math.max(...nums);
}

module.exports = findMax;
