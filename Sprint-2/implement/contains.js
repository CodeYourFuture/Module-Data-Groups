function contains(obj, propertyName) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("contains requires an object");
  }
  return Object.hasOwn(obj, propertyName);
}

module.exports = contains;
