function dedupe(list) {
  return [...new Set(list)];
}
console.log(dedupe(['a','a','b','c','c'])); // returns ['a', 'b', 'c']
console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8])); // returns [5, 1, 2, 3, 8]
console.log(dedupe([])); // returns []

module.exports = dedupe;