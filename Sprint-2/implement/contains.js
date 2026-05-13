function contains(object, property) {
  if (typeof object !== "object" || !object || Array.isArray(object)) {
    return false;
  }
  if (typeof property !== "string" || !object) {
    return false;
  }

  return Object.hasOwn(object, property);
}

module.exports = contains;
