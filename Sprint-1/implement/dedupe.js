function dedupe(value) {
  const newDedupe = [...new Set(value)];
  return newDedupe;
}
/*
console.log(dedupe({}));
console.log(dedupe(["a", "a", "a", "b", "b", "c"])); // should return ['a', 'b', 'c']
console.log(dedupe([])); // should return [];
console.log(dedupe([])); // should return ["no duplicates"]
console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8])); // should return [5, 1, 2, 3, 8]
console.log(dedupe([1, 3, 2, 4])); // should return [1, 3, 2, 4]
*/
module.exports = dedupe;
