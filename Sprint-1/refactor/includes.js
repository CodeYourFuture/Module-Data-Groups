// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (let i of list) {
    if (i === target) {
      return true;
    }
  }
  return false;
}
console.log(includes(["a", "b", "c", "d"], "c"));
console.log(includes(["a", "b", "c", "d"], "e"));
module.exports = includes;
