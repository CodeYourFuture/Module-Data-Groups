// Find the largest numerical value in an array.
// Non-number values should be ignored.

function findMax(elements) {
  let maxValue = -Infinity;

  for (const element of elements) {
<<<<<<< HEAD
    // Only compare values that are real numbers
    if (typeof element === "number" && !Number.isNaN(element)) {
      if (element > maxValue) {
        maxValue = element;
      }
=======
    if (Number.isFinite(element) && element > maxValue) {
      maxValue = element;
>>>>>>> a22ed15 (Address mentor feedback for sprint 1 data groups)
    }
  }

  return maxValue;
}

module.exports = findMax;
