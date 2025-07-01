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

module.exports = includes;
function includes (list, target){
  if (!Array.isArray(list) && list.length=== 0) return []
  if(list.includes(target)){
  return true
}
  else {
  return false
}
}