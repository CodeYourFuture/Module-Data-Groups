// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const i of list) {
    if (i === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
