function findMax(elements) {
  if (!elements.length === 1) {
    return false;
  }
  return Math.max(...elements);
}

module.exports = findMax;
