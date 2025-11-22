function contains(obj, propertyName) {
  return obj && typeof obj === "object" && propertyName in obj;
}
// console.log(contains(({ a: 1, b: 2 }, "c")));
module.exports = contains;
