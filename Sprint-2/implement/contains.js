const contains = (obj, char) => {
  return obj.hasOwnProperty(char);
};
console.log(contains({ a: 1, b: 2 }, "c"));
module.exports = contains;
