// Find the largest numerical value in an array.
// Non-number values should be ignored.

function findMax(elements) {
  let maxValue = -Infinity;

  for (const element of elements) {
    if (Number.isFinite(element) && element > maxValue) {
      maxValue = element;
    }
  }

  return maxValue;
}

module.exports = findMax;