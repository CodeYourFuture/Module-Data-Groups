// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const el of list) {
    if (el === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
