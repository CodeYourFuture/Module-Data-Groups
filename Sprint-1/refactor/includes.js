// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  // for (let index = 0; index < list.length; index++) {
  //   const element = list[index];
  //   if (element === target) {
  //     return true;
  //   }
  // }
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}
console.log(includes([1, 2, 3, 4], 1));
console.log(includes(["a"], "a"));
console.log(includes(["a", 1, 2, 3], 5));

module.exports = includes;
