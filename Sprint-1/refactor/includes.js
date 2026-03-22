// Refactor the implementation of includes to use a for...of loop
// this new version looks great.

function includes(list, target) {
  return list.includes(target) ? true : false;
}

module.exports = includes;
