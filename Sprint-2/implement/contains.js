function contains(obj, prop) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }

  return Object.hasOwn(obj, prop);
}

module.exports = contains;
