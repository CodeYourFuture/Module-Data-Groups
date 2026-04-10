function contains(obj, property) {
  if (Array.isArray(obj) || typeof obj !== "object" || obj === null) {
    return false;
  }
  return obj.hasOwnProperty(property);
}

module.exports = contains;
