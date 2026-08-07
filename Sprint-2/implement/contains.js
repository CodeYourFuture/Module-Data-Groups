function contains(obj, prop) {
  if (typeof obj !== "object" || obj === null) return false;
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = contains;