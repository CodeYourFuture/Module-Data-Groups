function contains(object, property) {
  if (Array.isArray(object)) {
    throw new Error("Invalid parameter");
  }

  return property in object;
}

module.exports = contains;
