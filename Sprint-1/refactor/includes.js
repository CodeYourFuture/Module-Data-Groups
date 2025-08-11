// Refactor the implementation of includes to use a for...of loop

//for of loop iterates over each element without needing to use the index to access a particular element
function includes(list, target) {
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
