function findMax(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Expected an array");
  }

  return nums.reduce((acc, curr) => {
    // ignores non-num values
    if (typeof curr !== "number" || isNaN(curr)) {
      return acc;
    }

    return curr > acc ? curr : acc;
  }, -Infinity); // returns -Infinity for empty elements arr, as reduce callback never runs.
}

module.exports = findMax;
