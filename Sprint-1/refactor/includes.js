// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  if (!Array.isArray(list) || list.length === 0) {
    return false;
  }
  for (const index of list) {
    const element = index;
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
