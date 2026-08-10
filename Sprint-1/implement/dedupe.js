function dedupe(arr) {
  if (arr.length === 0) {
    return [];
  }
  const uniqueSet = new Set(arr);
  return [...uniqueSet];
}
console.log(dedupe([3, 3, 3, 7, 8, 9, 9, 6, 6]));
module.exports = dedupe;
