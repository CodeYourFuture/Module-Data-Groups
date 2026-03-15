// max.js
// Find the largest numerical element in an array
// Non-numeric values are ignored

function findMax(elements) {
  // Filter to keep only numbers (ignores strings, null, undefined, etc.)
  const numbersOnly = elements.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  // If no numbers remain, return -Infinity (consistent with Math.max() behaviour)
  if (numbersOnly.length === 0) return -Infinity;

  // Math.max with spread returns the largest number
  return Math.max(...numbersOnly);
}

module.exports = findMax;
