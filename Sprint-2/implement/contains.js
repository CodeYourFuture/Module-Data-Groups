function contains(object, name) {
  // Return false for null, undefined, primitives, and arrays
  if (object == null || typeof object !== "object" || Array.isArray(object)) {
    return false;
  }

  // Now safe to use Object.hasOwn
  return Object.hasOwn(object, name);
}

module.exports = contains;
