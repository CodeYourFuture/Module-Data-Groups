function dedupe(arr) {
  // If array is empty, return empty array
  if (!arr || arr.length === 0) return [];
  
  // Use Set to remove duplicates and preserve order
  return [...new Set(arr)];
}

module.exports = dedupe;
