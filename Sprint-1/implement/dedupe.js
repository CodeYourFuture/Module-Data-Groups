function dedupe(arr) {
  if (arr.length === 0) {
    return [];
  }

  return [...new Set(arr)];
}
module.exports = dedupe;
