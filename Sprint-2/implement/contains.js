function contains(obj, prop) {
  if (
    obj != null &&
    typeof obj === "object" &&
    !Array.isArray(obj) &&
    Object.prototype.hasOwnProperty.call(obj, prop)
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = contains;
