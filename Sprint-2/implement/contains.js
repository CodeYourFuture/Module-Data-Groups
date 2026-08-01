function contains(obj, key) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  return Object.keys(obj).includes(key);
}

module.exports = contains;