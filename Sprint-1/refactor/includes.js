// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  /*
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === target) {
      return true;
    }
  } */
  for (let index of list) {
    if (index === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
