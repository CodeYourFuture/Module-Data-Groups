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
  for (let element of list) {
    if (element === target) {
      console.log("true");
      return true;
    }
  }
  console.log("false");
  return false;
}
const new_list = [1, 2, 3, 4, 5, 7];
const tar = 5;
includes(new_list, tar);
// console.log(includes([1, 2, 3]), 3);

module.exports = includes;
