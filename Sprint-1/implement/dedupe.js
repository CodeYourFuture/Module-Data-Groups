function dedupe(elements) {
  if (!elements || elements.length === 0) {
    return [];
  }
  
  const uniqueElements = new Set(elements);
  
  return Array.from(uniqueElements);
}

module.exports = dedupe;
