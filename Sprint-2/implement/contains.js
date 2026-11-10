function contains(object, property) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    throw new Error("contains requires an object");
  }
  return property in object;
}

module.exports = contains;
