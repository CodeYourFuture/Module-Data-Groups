function contains(obj, property) {
  if (Array.isArray(obj) || obj === null || typeof obj !== "object")
    return false;

  if (obj instanceof Map) return obj.has(property);
  return Object.hasOwn(obj, property);
}

module.exports = contains;
