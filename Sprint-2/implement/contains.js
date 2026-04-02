function contains(object, property) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    throw new Error("Invalid parameter");
  }
  return Object.hasOwn(object, property);
}

module.exports = contains;
