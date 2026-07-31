function dedupe(array) {
  // return empty array if empty input
  if (array.length === 0) return [];
  return Array.from(new Set(array));
}

module.exports = dedupe;
