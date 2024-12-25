// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const element of list) {// Iterate through each element in the list
    if (element === target) { // Check if the current element matches the target
      return true;
    }
  }
  return false;
}
console.log(includes([1, 2, 3, 4, 6], 7))
console.log(includes([1, 2, 3, 4, 6], 2))
module.exports = includes;
