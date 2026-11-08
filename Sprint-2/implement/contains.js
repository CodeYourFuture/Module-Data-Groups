function contains(object, property) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    throw new Error("contains requires an object");
  }
  return Object.hasOwn(object, property);
}

module.exports = contains;
