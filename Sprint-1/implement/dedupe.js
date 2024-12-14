function dedupe(array) {
  if (array.length === 0) {
    return [];
  }
  return [...new Set(array)]; // Use a Set to remove duplicates and return the unique array
}

module.exports = dedupe;