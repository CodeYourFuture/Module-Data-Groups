function dedupe(arr) {
  // Ensure arr is an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  // return [] if arr is []
  if (arr.length === 0) return [];

  return [...new Set(arr)];
}

module.exports = dedupe;
