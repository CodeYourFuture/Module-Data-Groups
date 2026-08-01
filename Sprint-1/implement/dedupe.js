function dedupe(arr) {
  const elements = [];
  for (const item of arr) {
    if (!elements.includes(item)) {
      elements.push(item);
    }
  }
  return elements;
}

module.exports = dedupe;
