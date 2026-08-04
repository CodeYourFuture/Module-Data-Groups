function dedupe(arr) {
  return [...new Set(arr)];
}

module.exports = dedupe;

console.log(dedupe(["a", "a", "a", "b", "b", "c"])); // ['a', 'b', 'c']
console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8])); // [5, 1, 2, 3, 8]
