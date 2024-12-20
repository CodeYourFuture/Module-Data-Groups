// Refactor the implementation of includes to use a for...of loop
// ran the code and it works. next step is to begin the refactor.

//we can make more sleek and keep the same logic first.
// function includes(list, target) {
//   for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     if (element === target) {
//       return true;
//     }
//   }
//   return false;
// }

// the new function:
function includes(list, target) {
  for (const element of list) {
    if (element === target) return true;
  }
  return false;
}
// the new version of the function uses a more precise type for loop and erases the need for the index var and the subsequent syntax. finally combined the if and the boolean.
// it passes all the tests
module.exports = includes;
