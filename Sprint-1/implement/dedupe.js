function dedupe() {
  const newDedupe = [...new Set(value)];
  return newDedupe;
}

module.exports = dedupe;
