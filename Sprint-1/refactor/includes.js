// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const item of list) {
    if (item === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;