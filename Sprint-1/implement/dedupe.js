function dedupe(array) {
    //Set object lets store unique values of the array
  return [...new Set(array)];
}

console.log(dedupe([]));
console.log(dedupe(["a", "a", "b"]));
console.log(dedupe(["a", "a", "a", "b", "c"]));
console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8]));

module.exports = dedupe;