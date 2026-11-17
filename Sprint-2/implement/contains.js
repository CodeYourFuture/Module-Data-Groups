function contains(items, value) {
  if (items === null || Array.isArray(items) || typeof items !== "object") {
    throw new Error("contains requires an object");
  }

  return Object.hasOwn(items, value);
}

module.exports = contains;
