// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (let num of list) {
    if (num === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
