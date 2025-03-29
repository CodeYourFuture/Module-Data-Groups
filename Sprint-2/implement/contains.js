function contains(obj, property) {
  if (typeof obj !== 'object' || obj === null) {
    return false; // Handle non-object inputs
  }

  if (Array.isArray(obj)) {
    return false; // Arrays should never return true
  }

  return obj.hasOwnProperty(property);
}

module.exports = contains;