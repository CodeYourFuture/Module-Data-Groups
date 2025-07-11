// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  if (!Array.isArray(list) || list.length === 0) {
    return false;
  }
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
