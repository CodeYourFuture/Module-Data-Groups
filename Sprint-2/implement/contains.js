function contains(obj, property_name) {
  return Object.prototype.hasOwnProperty.call(obj, property_name);
}

module.exports = contains;
