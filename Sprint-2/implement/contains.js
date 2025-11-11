function contains(object, property) {
  if (object === null || typeof object !== "object" || Array.isArray(object)) {
    throw new Error("object is not an object type!");
  }

  return Object.prototype.hasOwnProperty.call(object, property);
}

module.exports = contains;
