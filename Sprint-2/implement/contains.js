function contains(obj, propertyName) {
  // 1. Check if 'obj' is a valid object and NOT an array
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  // 2. Check if the propertyName exists as a key in the object
  return Object.hasOwn(obj, propertyName);
}

module.exports = contains;
