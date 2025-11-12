// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const element of list) {
    if (element === target) return true;
  }
  return false;
}
module.exports = includes;

// function includes(list, target) {

//    return (list.indexOf(target)===-1)? false:true;
// }
// module.exports = includes;
