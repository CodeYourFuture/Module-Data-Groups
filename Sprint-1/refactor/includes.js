// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  // Loop through each element in the list using a for...of loop
  for (const element of list) {
    // If the current element matches the target, return true
    if (element === target) {
      return true;
    }
  }

  // If the loop finishes without finding the target, return false
  return false;
}

module.exports = includes;
