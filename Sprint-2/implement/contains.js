function contains(object, name) {
  if (typeof object !== "object" || Array.isArray(object) || object === null) {
    throw new Error("contains requires an object");
  }

  if (name in object) {
    return true;
  }
  return false;
}

module.exports = contains;
