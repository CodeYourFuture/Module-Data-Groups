function contains(object, property) {
  //   if (Object.getPrototypeOf(object) !== Object.prototype) {
  if (typeof object !== "object" || Array.isArray(object) || object === null) {
    console.log("error");
    throw new Error("Invalid parameter");
  }
  if (Object.hasOwn(object, property)) return true;
  return false;
}

module.exports = contains;

console.log(contains({ a: 1, b: 2 }, "c"));
console.log(contains({ a: 1, b: 2 }, "a"));
// console.log(contains(["a"], "a"));
