function contains(object, propertyName) {
  if (Object.prototype.toString.call(object) !== "[object Object]") {
    // if user passes something that is not an object, then return false.
    return false;
  }
  return Object.hasOwn(object, propertyName);
}

module.exports = contains;
