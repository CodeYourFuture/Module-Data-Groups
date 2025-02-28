// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;

console.log(includes([1, 2, 3], 2)); // Output: true
console.log(includes([1, 2, 3], 4)); // Output: false
console.log(includes(['a', 'b', 'c'], 'b')); // Output: true
console.log(includes(['a', 'b', 'c'], 'd')); // Output: false