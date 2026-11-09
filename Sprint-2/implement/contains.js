function contains(obj, propertyName) {
  // Check if obj is null, not an object type, or is an array
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("contains requires an object");
  }

  // Check if the object has the specified property key
  return Object.prototype.hasOwnProperty.call(obj, propertyName);
}

module.exports = contains;
