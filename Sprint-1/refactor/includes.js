// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
// iterate through each element in the list
  for (const element of list){ 

    // If an element matches the target, return true
    if (element === target) {
      return true;
    }
  }
  // If no element matches the target, return false
  return false;
}

module.exports = includes;
