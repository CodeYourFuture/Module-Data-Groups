// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {

  //Using for...of loop to iterate directly over the elements of the list
  for (const item of list){
    if (item === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
