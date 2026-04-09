function contains(obj, name) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }
  return Object.hasOwn(obj, name);
}

module.exports = contains;
