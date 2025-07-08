function contains(object, propertyName) {
  // Check if the input is a real object (not null or an array)
  const isObject =
    typeof object === "object" && object !== null && !Array.isArray(object);

  // If it's not a valid object or property name is missing, return false
  if (!isObject || typeof propertyName !== "string") {
    return false;
  }

  // Return true if the object has the property directly (not inherited)
  return object.hasOwnProperty(propertyName);
}


module.exports = contains;
