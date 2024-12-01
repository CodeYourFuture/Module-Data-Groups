// Refactor the implementation of includes to use a for...of loop

/*function includes(list, target) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === target) {
      return true;
    }
  }
  return false;
} */
//refactored version of includes() :
function includes(list,target){
  for(const value of list){
    if (target === value){
      return true;
    }
  }
  return false;
}
//let list = [1,2,3,4,5]
//console.log(includes(list, 10));
module.exports = includes;
