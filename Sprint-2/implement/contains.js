function contains(obj, prop) {
  // Check if the input is a valid object and prop is a string
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }

  // Use Object.hasOwn to check if property exists
  return Object.hasOwn(obj, prop);
}

module.exports = contains;

