// Check if an object contains a specific property
function contains(object, propertyName) {
  // If the input is not a valid object or is an array, return false
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    return false;
  }

  // Use hasOwnProperty to check if the key exists in the object
  return object.hasOwnProperty(propertyName);
}

module.exports = contains;
