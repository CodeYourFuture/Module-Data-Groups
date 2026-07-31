// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const number of list) {
    if (number === target) return true;
  }
  return false;
}

module.exports = includes;
