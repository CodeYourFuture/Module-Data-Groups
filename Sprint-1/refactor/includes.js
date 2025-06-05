// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (element of list) {
    if (target === element) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
