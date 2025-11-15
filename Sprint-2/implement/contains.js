function contains(obj, propertyName) {
  // Check if obj is a valid plain object (not array, not null, not other object types)
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }

  // Use hasOwnProperty to check if the property exists directly on the object
  return Object.prototype.hasOwnProperty.call(obj, propertyName);
}

module.exports = contains;
