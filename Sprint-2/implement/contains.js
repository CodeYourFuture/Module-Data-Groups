function contains(obj, prop) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  return obj.hasOwn(obj, prop);
}

module.exports = contains;
