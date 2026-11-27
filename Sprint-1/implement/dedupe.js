function dedupe(list) {
  const elements = [];

  for (const item of list) {
    if (!elements.includes(item)) {
      elements.push(item);
    }
  }
  return elements;
}

module.exports = dedupe;
