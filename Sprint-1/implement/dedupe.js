function dedupe(elements) {
  if (!elements || elements.length === 0) {
    return [];
  }
  
  const seen = new Set();
  const result = [];
  
  elements.forEach(element => {
    if (!seen.has(element)) {
      seen.add(element);
      result.push(element);
    }
  });
  
  return result;
}

module.exports = dedupe;
