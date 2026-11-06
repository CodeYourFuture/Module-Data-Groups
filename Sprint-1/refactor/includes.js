// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (item of list) {
    if (item === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
