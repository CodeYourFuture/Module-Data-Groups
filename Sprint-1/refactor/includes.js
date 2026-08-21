// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const li of list) {
    if (li === target) {
      return true;
    }
  }

  return false;
}
console.log(includes([1, 2, 3, 4, 55, 6, null, 6, 7], 6));
module.exports = includes;
