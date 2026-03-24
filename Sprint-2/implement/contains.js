function contains(obj, prop) {
  // Reject null/undefined, arrays, and non-objects
  if (obj === null || obj === undefined) return false;
  if (Array.isArray(obj)) return false;
  if (typeof obj !== "object") return false;

  // prop must be provided
  if (prop === undefined || prop === null) return false;

  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = contains;
