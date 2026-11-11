function contains(object, property) {
  if (Array.isArray(object)) {
    throw new Error("contains requires an object");
  }
  return property in object;
}

module.exports = contains;
