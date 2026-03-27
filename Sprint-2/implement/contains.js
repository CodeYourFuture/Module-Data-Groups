function contains(obj, prop) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  // Use the static Object.hasOwn() method
  return Object.hasOwn(obj, prop);
}

module.exports = contains;