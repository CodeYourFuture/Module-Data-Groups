function dedupe(list) {
  return Array.from(new Set(list));
}

module.exports = dedupe;
