function contains(obj, key) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false; // If type of object is not an object or obj is null or obj is an array, return false
  }
  return key in obj;
}

module.exports = contains;
