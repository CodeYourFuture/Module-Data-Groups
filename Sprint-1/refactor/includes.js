// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === target) {
      return true;
    }
  }
  return false;
}
function includes(array, target) {
    // Return true if the array includes the target, false otherwise
    return array.some(item => item === target);
}

module.exports = includes;


