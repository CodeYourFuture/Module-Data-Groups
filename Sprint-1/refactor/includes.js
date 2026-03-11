// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  // Iterate directly over each element in the list
  for (const element of list) {
    // Return true as soon as we find a match
    if (element === target) {
      return true;
    }
  }
  // Target was not found in the list
  return false;
}

module.exports = includes;
