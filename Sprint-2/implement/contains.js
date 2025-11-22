// Implement the contains function
function contains(obj, propName) {
  // Check that the first argument is an object, not null or an array
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  // Check if the object has the property
  return obj.hasOwnProperty(propName);
}

// Export the function so other files can use it
module.exports = contains;
