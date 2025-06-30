// Refactor the implementation of includes to use a for...of loop

// Implementation of includes using the built-in Array.includes method.
// Simplified- by reducing the amount of code, offers improved readability as it's clear and easy to understand.

function includes(list, target) {   // Takes two parameters--'list'- an array to search, 'target'- value to check for
  return list.includes(target);     // 'true' if `target` is found, and 'false' if not.
}

module.exports = includes;

/*
function includes(list, target) {
  for (const item of list) {
    if (item === target) {
      return true;
    }
  }
  return false;
}
*/

