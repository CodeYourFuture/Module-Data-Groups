function contains(object, part) {
  // Check if object is a valid object and not an array or null
  if (!object || typeof object !== "object" || Array.isArray(object)) {
    return false;
  }

  // Check if the property exists in the object
  if (Object.hasOwn(object, part)) {
    return true;
  }
  return false;
}

module.exports = contains;
