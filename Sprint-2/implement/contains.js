function contains(obj, prop) {
  // Guard clause: Ensure obj is a valid, non-null, non-array object
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  // Check if the object directly holds the specified key
  return Object.hasOwn(obj, prop);
}

module.exports = contains;
