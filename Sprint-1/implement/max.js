function findMax(elements) {
  return elements.reduce((acc, curr) => {
    // ignores non-num values
    if (typeof curr !== "number") {
      return acc;
    }
    return curr > acc ? curr : acc;
  }, -Infinity); // returns -Infinity for empty elements arr, as reduce callback never runs.
}

module.exports = findMax;
