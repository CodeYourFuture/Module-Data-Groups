// Refactor the implementation of includes to use a for...of loop
function includes(arr, target) {
  // Manual implementation of .includes()
  for (const item of arr) {
    if (item === target) {
      return true;
    }
  }

  return false;
}

module.exports = includes;


