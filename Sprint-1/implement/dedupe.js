function dedupe(value) {
  return (newDedupe = [...new Set(value)]);
}

module.exports = dedupe;
