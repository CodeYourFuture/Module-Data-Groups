function contains(obj, char) {
  return obj.hasOwnProperty(char);
  //return char in obj;
}
console.log(contains({ a: 1, b: 2 }, "c"));
module.exports = contains;
