// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  // for (let index = 0; index < list.length; index++) {
  // const element = list[index];
  //if (element === target) {
  for (let element of list) {
    if (element === target) {
      return true;
    }
  }

  return false;
}
//console.log(includes([1, 4, 3, 5, 2], 3));
module.exports = includes;
