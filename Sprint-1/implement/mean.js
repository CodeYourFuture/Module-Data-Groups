// Explanation:

// The mean is the sum of the numbers divided by how many there are.
// We check the input first: it must be an array, it must not be empty (there is
// no mean of nothing, and dividing by zero would give NaN), and every element
// must be a number. Each bad input throws a named error rather than guessing.

function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMean requires an array of numbers");
    }
  }
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  let total = 0;
  for (const item of list) {
    total += item;
  }
  return total / list.length;
}

module.exports = calculateMean;
