function dedupe(array) {
  const result = [];
  if (array.length === 0) {
    return result;
  }
  const set = new Set(array);
  const newArray = Array.from(set);
  return newArray;
}
module.exports = dedupe;
