function findMax(elements) {
  // Filter to only numeric values
  const nums = elements.filter((x) => typeof x === "number" && isFinite(x));
  // Math.max with no arguments returns -Infinity, which handles empty arrays as well
  return Math.max(...nums);
}

module.exports = findMax;
