function findMax(elements) {
  const max = elements.reduce((acc, curr) => {
    // ignores non-num values
    if (typeof curr !== "number") {
      return acc;
    }
    return curr > acc ? curr : acc;
  }, -Infinity); // returns -Infinity for empty elements arr, as reduce callback never runs.

  return max;
}

module.exports = findMax;
