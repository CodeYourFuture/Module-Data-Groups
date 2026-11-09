function contains(object, property) {
  if (object === null || typeof object !== "object" || Array.isArray(object)) {
    throw new Error("contains requires an object");
  }

  return Object.prototype.hasOwnProperty.call(object, property);
}

module.exports = contains;
