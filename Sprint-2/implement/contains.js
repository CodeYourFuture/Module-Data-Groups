function contains(object, property) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    throw new TypeError(
      "First argument must be an object in the form { key: value }"
    );
  }

  return object.hasOwnProperty(property);
}

module.exports = contains;
