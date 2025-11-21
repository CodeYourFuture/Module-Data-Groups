function contains(obj, key) {

  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  return Object.prototype.hasOwnProperty.call(obj, key);
}

module.exports = contains;

