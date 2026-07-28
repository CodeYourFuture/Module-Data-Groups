function contains(object, propertyName) {
  if (Array.isArray(object)) {
    return false;
  }

  return Object.hasOwn(object, propertyName);
}

module.exports = contains;