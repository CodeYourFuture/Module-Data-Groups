function contains(obj, prop) {
  // Check if obj is a non-null object and not an array
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return false;
  }
  // Use Object.prototype.hasOwnProperty to check for the property
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = contains;
