function contains(object, propertyName) {
  if (typeof object === "object" && object !== null) {
    return propertyName in object;
  }
  return false;
}

module.exports = contains;
