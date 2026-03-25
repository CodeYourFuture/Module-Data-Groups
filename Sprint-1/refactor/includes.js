// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  if (!Array.isArray(list)) return false;

  for (const item of list) {
    if (item === target) {
      return true;
    }
  }

  return false;
}

module.exports = includes;
