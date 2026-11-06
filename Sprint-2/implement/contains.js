function contains(obj, prop) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("contains requires an object");
  }
  return Object.hasOwn(obj, prop);
}

module.exports = contains;

