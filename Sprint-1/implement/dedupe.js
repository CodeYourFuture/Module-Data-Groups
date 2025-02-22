function dedupe(items) {
  return [...new Set(items)];
}

module.exports = dedupe;
