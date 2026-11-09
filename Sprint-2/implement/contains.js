function contains(object, key) {
  if (typeof object !== "object" || Array.isArray(object) || object === null) {
    throw new Error("contains requires an object");
  }
  const keysCheck = Object.keys(object);
  if (keysCheck.includes(key)) {
    return true;
  } else {
    return false;
  }
}

module.exports = contains;
