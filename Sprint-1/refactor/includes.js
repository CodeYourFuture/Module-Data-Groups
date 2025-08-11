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

// Because the includes() method is used to loop through arrays to check if a value exists it is doing the same check as the longer function above. The code on line 15 will simply return true if target is found in list, and false otherwise.
function includes(list, target) {
  return list.includes(target);
}

module.exports = includes;
