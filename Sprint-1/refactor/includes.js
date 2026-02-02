// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  return list.includes(target) ? true : false;
}

module.exports = includes;
