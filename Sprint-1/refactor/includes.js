// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (let item of list) {
    if (target === item) {
      return true;
    }
  }
  return false;
}
console.log(includes(["a", "b", "c", "d"], "c"));
module.exports = includes;
