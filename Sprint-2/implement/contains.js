function contains(object, property) {
  if (Array.isArray(object)) {
    throw new Error("contains requires an object");
  }
}

module.exports = contains;
