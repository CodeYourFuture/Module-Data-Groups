function contains(obj, prop) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false; // Return false if obj is not a valid object
  }
  return obj.hasOwnProperty(prop);
}

module.exports = contains;

