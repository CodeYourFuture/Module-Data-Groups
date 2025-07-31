function contains(obj, key) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }
  return obj.hasOwnProperty(key);
}

module.exports = contains;
