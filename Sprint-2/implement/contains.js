function contains(obj, targetKey) {
  if (
    obj === null ||
    typeof obj !== "object" ||
    Array.isArray(obj) ||
    Object.getPrototypeOf(obj) !== Object.prototype
  ) {
    throw new Error("Invalid Parameter");
  }
  return Object.hasOwn(obj, targetKey);
}

module.exports = contains;
