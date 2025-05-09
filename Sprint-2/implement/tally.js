function tally(items) {
  // Validate input
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  // Use reduce to build the frequency map
  return items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1; // Increment the count for the item
    return acc;
  }, {});
}

module.exports = tally;