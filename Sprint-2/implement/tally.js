/**
 * tally()
 *
 * Counts how many times each item appears in an array.
 *
 * Example:
 * tally(["a", "a", "b", "c"])
 * returns { a: 2, b: 1, c: 1 }
 */
function tally(items) {
  // Validate input
  if (!Array.isArray(items)) {
    throw new Error("Expected an array");
  }

  // Create an object with no inherited properties
  const counts = Object.create(null);

  for (const item of items) {
    if (counts[item] !== undefined) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
}

module.exports = tally;
