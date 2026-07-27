function contains() {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = contains;
