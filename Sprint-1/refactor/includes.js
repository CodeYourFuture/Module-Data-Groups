// Refactor the implementation of includes to use a for...of loop

// This function checks if a value is in a list. It returns true if found, otherwise false.
function includes(list, target) {
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }

  return false;
}

module.exports = includes;
