function contains(obj, property) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }
  return property in obj;
}

module.exports = contains;
