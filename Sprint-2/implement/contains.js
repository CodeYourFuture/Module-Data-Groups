function contains(object, key) {
  if (typeof object !== "object" || Array.isArray(object) || object === null) {
    throw new Error("contains requires an object");
  }
  return Object.hasOwn(object, key);
}

module.exports = contains;
