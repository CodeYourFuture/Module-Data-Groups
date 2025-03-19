// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (let n of list) { //loop inside the array and if target is present return true if not return false
    if (n === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
