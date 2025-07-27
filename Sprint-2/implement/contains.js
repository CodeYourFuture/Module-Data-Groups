function contains(object, part) {
  // Check if object is a valid object and not an array or null
  if (!object || typeof object !== "object" || Array.isArray(object)) {
    return false;
  }

  // return true if the property exists in the object
  return Object.hasOwn(object, part)
}

module.exports = contains;
