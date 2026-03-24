/**
 * contains()
 *
 * Checks whether an object contains a specific own property.
 *
 * @param {object} obj - The object to check.
 * @param {*} propertyName - The property name to check.
 * @returns {boolean} True if the object has the property as its own key, otherwise false.
 */
function contains(obj, propertyName) {
  // Reject null, non-objects, and arrays
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }

  // Check own properties only
  return Object.hasOwn(obj, propertyName);
}

module.exports = contains;
