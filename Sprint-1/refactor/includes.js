// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const element of list) {
    // Check if the current element matches the target
    if (element === target) {
      return true;
    }
  }

  // Return false if the target is not found in the list
  return false;
}

module.exports = includes;
