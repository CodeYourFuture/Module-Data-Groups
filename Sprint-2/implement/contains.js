function contains(obj, key) {
  // Check if the input is a valid object
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  // Check if the object contains the key
  return obj.hasOwnProperty(key);
}


module.exports = contains;
