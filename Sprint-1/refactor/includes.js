// Refactor the implementation of includes to use a for...of loop

const includes = (list, target) => {
  return list.some((i) => i === target);
};
console.log(includes(["a", "b", "c", "d"], "c"));
console.log(includes(["a", "b", "c", "d"], "e"));
module.exports = includes;
