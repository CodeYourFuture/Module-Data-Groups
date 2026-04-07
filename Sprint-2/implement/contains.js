function contains(obj, key) {
  return Object.hasOwn(obj, key);
}

module.exports = contains;