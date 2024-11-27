// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  // rewrite function with for of loop
  for(const element of list){
    if (element === target) {
      return true;
    }
    return false;
  }
  // for (let index = 0; index < list.length; index++) {
  //   const element = list[index];
  //   if (element === target) {
  //     return true;
  //   }
  // }
  // return false;
}

module.exports = includes;
