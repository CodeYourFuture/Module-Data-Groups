function contains(object, name) {
  if (typeof object !== "object" || Array.isArray(object) || object === null) {
    throw new Error("contains requires an object");
  }
  // the in Checks own and inherited properties so that is why it returned true when the name is 'toString'
  return Object.hasOwn(object, name);
}
//console.log(contains({ a: 1 }, "toString"));
module.exports = contains;
