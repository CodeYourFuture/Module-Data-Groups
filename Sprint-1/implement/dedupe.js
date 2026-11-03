function dedupe(list) {
  const elements = [];

  if (list.length === 0) {
    return [];
  }

  for (const item of list) {
    if (!elements.includes(item)) {
      elements.push(item);
    }
  }
  return elements;
}

module.exports = dedupe;
