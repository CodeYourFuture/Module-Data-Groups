function contains(object, property) {
  if (
    object === null ||
    typeof object !== "object" ||
    Array.isArray(object) ||
    (typeof property !== "string" && typeof property !== "symbol")
  ) {
    return false;
  }

  return Object.prototype.hasOwnProperty.call(object, property);
}

module.exports = contains;