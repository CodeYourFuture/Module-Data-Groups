function dedupe(array) {
  return [...new Set(array)];
}

module.exports = dedupe;