// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (item of list) {
    const element = item;
    if (element === target) {
      return true;
    }
  }

  return false;
}

module.exports = includes;
