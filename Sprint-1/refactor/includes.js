// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;

// const array = ["a", "b", "c"];

// for (const element of array) {
//   console.log(element);
// } for (variable of iterable) statement

