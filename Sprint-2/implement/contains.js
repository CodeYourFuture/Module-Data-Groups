function contains(obj, propName) {
  // Return false for non-objects or null
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }

  // Check if the object has the property as its own key
  return Object.hasOwn(obj, propName);
}

module.exports = contains;
