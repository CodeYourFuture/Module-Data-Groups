function contains(obj, key) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }
  return Object.hasOwn(obj, key);
}

module.exports = contains;
