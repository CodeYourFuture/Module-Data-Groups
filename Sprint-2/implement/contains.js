function contains(object, property) {
  for (const key in object) {
    if (key === property) {
      return true;
    }
  }
  return false;
}
console.log(contains({ a: 1, b: 2 }, "a"));
module.exports = contains;
