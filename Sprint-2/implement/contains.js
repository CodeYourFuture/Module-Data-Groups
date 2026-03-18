/**
 * contains()
 *
 * Checks whether an object contains a specific property.
 *
 * @param {object} obj - The object to check.
 * @param {string} propertyName - The property name we want to check.
 * @returns {boolean} True if the property exists, otherwise false.
 */

function contains(obj, propertyName) {
  // Validate that obj is actually an object
  // and not null or an array
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }

  // Validate propertyName
  if (typeof propertyName !== "string" || propertyName.length === 0) {
    return false;
  }

  // Check if the object has the property as its own key
  return Object.prototype.hasOwnProperty.call(obj, propertyName);
}

module.exports = contains;
