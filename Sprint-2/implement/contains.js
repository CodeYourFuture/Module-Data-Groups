function contains(obj, prop) {
  // Check that obj is an object (not null) and not an array
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }
  // Check if the property exists directly on the object
 return Object.hasOwn(obj, prop);
}


module.exports = contains;
