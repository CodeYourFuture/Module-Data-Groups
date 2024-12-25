function contains(obj, prop) {
  // Validate the input
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false; // Return false for invalid inputs
  }

  // Check if the property exists in the object
  return obj.hasOwnProperty(prop);
}

module.exports = contains;
