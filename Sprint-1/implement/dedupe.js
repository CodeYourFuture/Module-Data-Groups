function dedupe(groupNumber) {
  return [...new Set(groupNumber)];
}

module.exports = dedupe;
