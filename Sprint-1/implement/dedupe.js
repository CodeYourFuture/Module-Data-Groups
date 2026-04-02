function dedupe(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

module.exports = dedupe;
