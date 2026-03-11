function dedupe(arr) {
  // Return null if the input is not an array
  if (!Array.isArray(arr)) return null;
  // Use Set to remove duplicates,
  // then spread back into a new array
  return [...new Set(arr)];
}

module.exports = dedupe;
