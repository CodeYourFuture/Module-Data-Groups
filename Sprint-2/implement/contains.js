function contains(obj, property) {
  // Safety check: handle invalid inputs
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false; // Return false for non-object types, null, undefined, or arrays
  }

  // Check if the object has the specified property
  return obj.hasOwnProperty(property); // Use hasOwnProperty to check for the property
}

module.exports = contains;
