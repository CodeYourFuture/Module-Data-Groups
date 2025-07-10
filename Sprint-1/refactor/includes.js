// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const value of list) {
    if (value === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
