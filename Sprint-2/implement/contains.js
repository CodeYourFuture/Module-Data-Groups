function contains(obj, prop) {
  return obj && typeof obj === "object" && prop in obj;
}
// console.log(contains(({ a: 1, b: 2 }, "c")));
module.exports = contains;
