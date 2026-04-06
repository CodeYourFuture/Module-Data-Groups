function contains(obj, targetKey) {
  if (
    obj === null ||
    typeof obj !== "object" ||
    Array.isArray(obj)
  ) {
    throw new Error("Invalid Parameter");
  }
  return Object.hasOwn(obj, targetKey);
}
module.exports = contains;
