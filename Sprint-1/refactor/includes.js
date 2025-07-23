// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  
  for (const item of list) {
    if (item === target) {
      return true;
    }
  }
  return false;
}

console.log(includes([5, 6, null], 4));
console.log(includes(["a", "b", "m"], "m"));
console.log(includes(["a", "b", "m"], 2));
console.log(includes([1, 2, 2, 3], 2));
console.log(includes([null], null));
console.log(includes([], 2));

module.exports = includes;
