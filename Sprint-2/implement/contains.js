function contains(object, propertyName) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    return false;
  }
  return Object.hasOwn(object, propertyName);
}

module.exports = contains;
