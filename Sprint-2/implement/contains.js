function contains(obj, property) {
  if (
    obj === null ||
    typeof obj !== "object" ||
    Array.isArray(obj)
  ) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(obj, property);
}

module.exports = contains;
