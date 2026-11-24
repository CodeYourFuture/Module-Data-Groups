function contains(object, property) {
  if (Array.isArray(object) || object === null || typeof object !== "object") {
    throw new Error("contains requires an object");
  }
  return property in object;
}

module.exports = contains;
