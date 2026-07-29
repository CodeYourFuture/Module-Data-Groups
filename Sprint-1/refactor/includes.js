// Refactor the implementation of includes to use a for...of loop

function includes(array, target) {
  for (let value of array) {
    if (value === target) {
      return true;
    }
  }

  return false;
}

module.exports = includes;
