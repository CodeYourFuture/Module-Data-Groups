function contains(object, property) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    return false;
  }

  return Object.hasOwn(object, property);
}

module.exports = contains;


