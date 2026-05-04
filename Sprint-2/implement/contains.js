function contains(object, property) {

  // check if parameter is a valid object and not an array
  if (typeof object !== "object" || Array.isArray(object) || object === null) {
    return false;
  }

  return Object.prototype.hasOwnProperty.call(object, property);
}

module.exports = contains;