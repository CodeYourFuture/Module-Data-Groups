// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (let element of list) {
    // iterate through each element in the list
    if (element === target) {
      // check if the current element matches the target
      return true; // return true if a match is found and exit the function
    }
  }
  return false; // return false if no match is found after checking all elements
}

module.exports = includes;
