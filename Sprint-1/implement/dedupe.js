function dedupe(elements) {
  return Array.from(new Set(elements));
}

module.exports = dedupe;
