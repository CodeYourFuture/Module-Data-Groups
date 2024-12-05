
function includes(list, target) {
  // Use a for...of loop to check if the target is in the list
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;


