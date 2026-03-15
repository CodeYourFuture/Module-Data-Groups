// includes.js
// Refactored to use for...of loop instead of a traditional for loop
// Behaviour is identical — only the loop style changed

function includes(list, target) {
  // for...of iterates directly over each element value
  // No need to manage an index variable manually
  for (const element of list) {
    // If the current element matches the target, return true immediately
    if (element === target) {
      return true;
    }
  }
  // If no element matched after the full loop, return false
  return false;
}

module.exports = includes;
