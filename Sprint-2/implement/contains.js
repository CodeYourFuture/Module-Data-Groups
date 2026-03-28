function contains(object, property) {
  if (object.constructor !== Object) {
    throw new Error(
      "First argument must be an object in the form { key: value }"
    );
  }

  return object.hasOwnProperty(property);
}

module.exports = contains;
