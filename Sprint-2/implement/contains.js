function contains(object, propertyName) {
  // return false if object is null/defined or not an object
  if (object == null) return false;
  // typeof check + reject arrays
  if (typeof object !== "object") return false;
  if (Array.isArray(object)) return false;

  // Use Object.hasOwn to check only own properties
  return Object.hasOwn(object, propertyName);
}

module.exports = contains;
