function contains(object, propertyName) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    return false;
  }
  return object.hasOwnProperty(propertyName);
}

module.exports = contains;
