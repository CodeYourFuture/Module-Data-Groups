function contains(obj, key) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new TypeError("First argument must be an object");
  }

  return Object.prototype.hasOwnProperty.call(obj, key);
}

module.exports = contains;
