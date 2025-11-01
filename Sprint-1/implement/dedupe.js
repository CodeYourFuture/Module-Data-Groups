function dedupe(arr) {
  // Create a new Set from the array to remove duplicates
  // and then convert it back to an array.
  return Array.from(new Set(arr));
}

module.exports = dedupe;
