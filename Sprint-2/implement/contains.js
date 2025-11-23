function contains(obj, key) {
  if (obj === null || typeof obj !== "object") return false;

  return Object.prototype.hasOwnProperty.call(obj, key);// Updated to use hasOwnProperty to check for own properties only
}

module.exports = contains;
