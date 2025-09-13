function contains(obj, prop) {
  // Check if the input is a valid object and prop is a string
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }

  // Use Object.prototype.hasOwnProperty to check if property exists
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = contains;

