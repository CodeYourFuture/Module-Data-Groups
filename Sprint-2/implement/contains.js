function contains(inPut, content) {
  try {
    console.log(inPut.hasOwnProperty(content));
    return inPut.hasOwnProperty(content);
  } catch (error) {
    console.error(error);
  }
}
console.log(contains({ a: 1, b: 2 }, "a"));
console.log(contains({}, 9));
// console.log(contains([a, 1, b, 2], "a"));

module.exports = contains;
