function contains(obj, property) {
  // Check that 'obj' is a valid, non-array object
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  // Object.hasOwn checks if the key directly exists on the object
  return Object.hasOwn(obj, property);
}

module.exports = contains;
