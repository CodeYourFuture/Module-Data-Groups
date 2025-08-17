function contains(obj, key) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return false;
  }
  return Object.hasOwn(obj, key);
}

module.exports = contains;
