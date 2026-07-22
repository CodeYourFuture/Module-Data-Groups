function dedupe(arr) {
  const elements = [];
  for (const item of arr) {
    if (!elements.includes(item)) {
      elements.push(item);
    }
  }
  if (elements.length === arr.length) {
    return arr.slice();
  }
  return elements;
}

module.exports = dedupe;
