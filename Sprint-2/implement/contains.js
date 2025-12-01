function contains(obj, prop) {
  if (Object.keys(obj).length === 0) return false;
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = contains;
