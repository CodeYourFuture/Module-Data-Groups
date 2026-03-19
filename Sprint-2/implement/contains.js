function contains(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

module.exports = contains;
