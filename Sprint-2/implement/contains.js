function contains(obj, propertyName) {
  // Validating if input is an object
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new TypeError("Input must be an object");
  }

  // checking if property exists inside the object
  return propertyName in obj;
}
module.exports = contains;
