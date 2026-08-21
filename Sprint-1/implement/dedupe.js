function dedupe(elements) {
  if (elements.length === 0) {
    return [];
  }

  return [...new Set(elements)];
}

module.exports = dedupe;
