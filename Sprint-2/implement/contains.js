function contains(inPut, content) {
  // if (inPut === undefined || inPut === ) {
  //   return "fanny pad";
  //}
  console.log(inPut.hasOwnProperty(content));
  return inPut.hasOwnProperty(content);
}
console.log(contains({ a: 1, b: 2 }, "a"));
console.log(contains({}, 9));
//console.log(contains([a, 1, b, 2], "a"));

module.exports = contains;
