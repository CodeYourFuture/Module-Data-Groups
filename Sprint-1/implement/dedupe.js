function dedupe(array) {
  if (!Array.isArray(array)) return [];

  return [...new Set(array)];
}

module.exports = dedupe;
