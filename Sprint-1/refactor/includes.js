// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const element of list) { //for...of loops directly iterate over the value of the array and not the index position
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
