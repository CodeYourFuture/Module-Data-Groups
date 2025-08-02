function contains(obj, is_property_present) {
  // Return false for non-object types or null
  if (typeof obj !== "object" || obj === null) return false;

  // Reject arrays specifically
  if (Array.isArray(obj)) return false;

  // Return false for empty objects
  if (Object.keys(obj).length === 0 && obj.constructor === Object) return false;

  // Check if the property exists in the object or not
  return is_property_present in obj;
}

module.exports = contains;
