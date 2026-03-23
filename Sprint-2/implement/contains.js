function contains(obj, key) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(obj, key);
}

module.exports = contains;
