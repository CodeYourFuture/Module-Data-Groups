function dedupe(elements) {
  if (!elements || elements.length === 0) {
    return [];
  }
  
  const seen = new Set();
  return elements.filter(element => {
    if (seen.has(element)) {
      return false;
    }
    seen.add(element);
    return true;
  });
}

module.exports = dedupe;
