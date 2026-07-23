// Refactor the implementation of includes to use a for...of loop

function includes(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }

  return false;
}

module.exports = includes;
