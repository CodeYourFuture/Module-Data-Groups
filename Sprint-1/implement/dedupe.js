function dedupe(array) {
  // Validate input
  if (!Array.isArray(array)) return [];

  // set is a collection of unique values
  // It will automatically handle duplicates for us
  const seen = new Set(); // {}
  const result = [];

  // Iterate through the array
  // If the item is not in the set, add it to both the set and the result array
  for (const item of array) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}

module.exports = dedupe;
