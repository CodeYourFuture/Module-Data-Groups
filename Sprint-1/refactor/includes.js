// Refactor the implementation of includes to use a for...of loop

// function includes(list, target) {
//   for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     if (element === target) {
//       return true;
//     }
//   }
//   return false;
// }

function includes(list, target) {
  for (const items of list) {
    if (items === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;

console.log(includes(["a", "b", "c", "d"], "c"));
console.log(includes([1, 2, 3, 4], "a"));
console.log(includes([1, 2, 2, 3], 2));
console.log(includes([]));
console.log(includes(["b", "z", null, "a"], null));