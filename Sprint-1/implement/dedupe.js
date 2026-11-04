function dedupe(elements) {
  if (elements.length === 0) {
    return [];
  }
  let newArray = [];
  for (const items of elements) {
    if (!newArray.includes(items)) {
      newArray.push(items);
    }
  }
  return newArray;
}

module.exports = dedupe;
