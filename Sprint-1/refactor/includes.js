// Refactor the implementation of includes to use a for...of loop

/*function includes(list, target) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === target) {
      return true;
    }
  }
  return false;
}*/

function includes(list,target) {
  for (const el of list) {
    if (el === target){
      return true
    }
  }
  return false
}
console.log(includes([]))
module.exports = includes;
