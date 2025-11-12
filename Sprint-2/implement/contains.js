function contains(obj, key) {
  // Check if the first argument is a valid object
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  // Check if the key exists in the object
  return Object.prototype.hasOwnProperty.call(obj, key);
}

module.exports = contains;
