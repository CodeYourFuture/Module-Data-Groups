function dedupe(arr) {
  if (arr.length === 0) {
    return [];
  }
  const arrCopy = arr.slice(0);
  console.log(arrCopy);
  return [...new Set(arrCopy)];
}
module.exports = dedupe;

console.log(dedupe([1, 2, 3, 4, 4, 2]));
