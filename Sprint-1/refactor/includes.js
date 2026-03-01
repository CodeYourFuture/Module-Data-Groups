// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (element == target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
