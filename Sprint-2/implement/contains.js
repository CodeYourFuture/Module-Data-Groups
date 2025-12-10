// Checks if an object has a specific property.
// References:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

function contains(obj, propertyName) {
  // Returns false for invalid inputs (null, arrays, or non-objects)
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  return obj.hasOwnProperty(propertyName);
}

module.exports = contains;
