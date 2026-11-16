function contains(obj, key) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("contains requires an object");
  }

  return Object.hasOwn(obj, key);
}

module.exports = contains;
