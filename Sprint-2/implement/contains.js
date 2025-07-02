function contains(object, key) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    return false;
  }
  return object.hasOwnProperty(key);
}

module.exports = contains;
