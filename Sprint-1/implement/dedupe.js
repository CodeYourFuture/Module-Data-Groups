function dedupe(array) {
  if (array.length === 0) {
    return [];
  }
  const set = new Set(array);
  const newArray = Array.from(set);
  return newArray;
}

module.exports = dedupe;
