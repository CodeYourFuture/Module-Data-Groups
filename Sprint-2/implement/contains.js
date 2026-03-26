function contains(obj, key) {
  if (!obj) return false;

  return Object.prototype.hasOwnProperty.call(obj, key);
}

module.exports = contains;
