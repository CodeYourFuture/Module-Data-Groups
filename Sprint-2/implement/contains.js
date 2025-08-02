function contains(obj, propertyName) {
  // Validate that the first argument is in fact an object and not null or an array
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new TypeError("Invalid object type");
  }
  // Validate that the object is not a dictionary object (i.e., it has a prototype)
  if (Object.getPrototypeOf(obj) === null) {
    throw new TypeError("Dictionary objects are not allowed");
  }

  return obj.hasOwnProperty(propertyName);
}

module.exports = contains;
