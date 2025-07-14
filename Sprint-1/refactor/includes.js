// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}
const newList = [1, 2, 3, 5];
const newTarget = 3;
console.log(includes(newList, newTarget));

module.exports = includes;
