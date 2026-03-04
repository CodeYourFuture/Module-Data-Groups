function contains(object, propertyName) {
  // return false if object is null/defined or not an object
  if (object == null) return false;
  // typeof check + reject arrays
  if (typeof object !== "object") return false;
  if (Array.isArray(object)) return false;

  // Use hasOwnProperty to check only own properties
  return Object.prototype.hasOwnProperty.call(object, propertyName);
}

module.exports = contains;
