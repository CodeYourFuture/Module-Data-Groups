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
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}

console.log(includes(["a", "b", "c", "d"], "c")); // Expected output: true
console.log(includes(["a", "b", "c", "d"], "e")); // Expected output: false



module.exports = includes;
