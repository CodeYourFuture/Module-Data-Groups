/**
 * tally()
 *
 * Counts how many times each item appears in an array.
 *
 * Example:
 * tally(['a','a','b','c'])
 * returns { a: 2, b: 1, c: 1 }
 */

function tally(items) {
  // Validate input
  if (!Array.isArray(items)) {
    throw new Error("Expected an array");
  }

  const counts = {};

  // Loop through each item in the array
  for (const item of items) {
    // If the item already exists in the object, increase the count
    if (counts[item]) {
      counts[item] += 1;
    } else {
      // Otherwise initialise it
      counts[item] = 1;
    }
  }

  return counts;
}

module.exports = tally;
