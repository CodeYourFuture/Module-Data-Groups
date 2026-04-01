function contains(obj, key) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("Input must be a non-null object and not an array");
  }
  return key in obj; // simply checks if the key exists in the object
}

module.exports = contains;
