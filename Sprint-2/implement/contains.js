function contains(object, propertyName) {
  if (object instanceof Map || object instanceof Set) {
    return object.has(propertyName);
  }
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    // if user passes something that is not an object, or object is null/array, then return false.
    return false;
  }
  return Object.hasOwn(object, propertyName);
}

module.exports = contains;
