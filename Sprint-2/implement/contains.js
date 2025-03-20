function contains(object, property) {
  if (Array.isArray(object)) {
    return "Error";
  }
  return object.hasOwnProperty(property);
}

module.exports = contains;
