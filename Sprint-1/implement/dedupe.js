function dedupe(arr) {
    
  return [...new Set(arr)];
}

console.log(dedupe([]));
console.log(dedupe(["a", "a", "b"]));
console.log(dedupe(["a", "a", "a", "b", "c"]));
console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8]));

module.exports = dedupe;