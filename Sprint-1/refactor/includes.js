// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const item of list) {
    if (item === target) {
      return true;
    }
  }
  return false;
}
const currentOutput = includes(["a", "b", "c", "d"], "c");
console.log(currentOutput)
module.exports = includes;
