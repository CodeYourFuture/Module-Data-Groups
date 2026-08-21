function contains(object, propertyName) {
  if (object === null || typeof object !== "object" || Array.isArray(object)) {
    return false;
  }

  return Object.hasOwn(object, propertyName);
}
module.exports = contains;
