function tally(items) {
  // Check for valid input
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const counts = Object.create(null);

  for (const item of items) {
    // If the item exists, increment; otherwise, initialize to 1
    counts[item] = (counts[item] || 0) + 1;
  }

  return counts;
}

module.exports = tally;
