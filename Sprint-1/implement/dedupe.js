function dedupe(elements) {
  const noDupe = [...new Set(elements)];
  return noDupe;
}
console.log(dedupe([3, 3, 3, 4, 5, 4, "cat", "dog", "cat", 6, 1, 2, 3, 1]));
module.exports = dedupe;
