function contains(obj, key) {
  if (obj && typeof obj === "object") {
    return Object.hasOwn(obj, key);
  }
  return false;
}

module.exports = contains;
