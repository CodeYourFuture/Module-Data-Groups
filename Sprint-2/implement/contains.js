function contains(object, property) {
  if (object === null || typeof object !== "object" || Array.isArray(object)) {
    throw new Error("contains requires an object");
  }
  return Object.hasOwn(object, property);
}

module.exports = contains;
