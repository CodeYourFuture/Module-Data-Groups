function contains(obj, prop) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false; // Handle invalid inputs
  }
  return prop in obj;
}

module.exports = contains;
