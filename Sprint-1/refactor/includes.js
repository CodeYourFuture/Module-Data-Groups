// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (item of list) {
    if (item === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;

/* Old code:

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === target) {
      return true;
    }
  }
  return false;
*/
