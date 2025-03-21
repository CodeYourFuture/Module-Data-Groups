function contains(obj, property) {
  if (!obj || typeof property !== "string" || Array.isArray(obj)) {
    return false;
  }
  return property in obj;
}

module.exports = contains;
