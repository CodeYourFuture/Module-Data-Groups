function dedupe(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  return [...new Set(list)];
}

module.exports = dedupe;
