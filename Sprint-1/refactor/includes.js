// Refactor the implementation of includes to use a for...of loop

// 〰️ Refactored version of the includes function using a for...of loop instead of a traditional for loop

function includes(list, target) {
  // 〰️ Using for...of loop to iterate directly over the elements of the list
  for (const element of list) {
    // 〰️ If the target is found, return true
    if (element === target) {
      return true;
    }
  }
  // 〰️ If target is not found, return false
  return false;
}

console.log(includes(["a", "b", "c", "d"], "c"));
console.log(includes([1, 2, 3, 4], "a"));
console.log(includes([1, 2, 2, 3], 2));
console.log(includes([]));
console.log(includes(["b", "z", null, "a"], null));

module.exports = includes;
