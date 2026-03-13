// Find the largest numerical value in an array.
// Non-number values should be ignored.

function findMax(elements) {
  let maxValue = -Infinity;

  for (const element of elements) {
    // Only compare values that are real numbers
    if (typeof element === "number" && !Number.isNaN(element)) {
      if (element > maxValue) {
        maxValue = element;
      }
    }
  }

  return maxValue;
}

module.exports = findMax;
