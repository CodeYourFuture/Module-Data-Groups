function contains(obj, key) {
  if (
    obj === null ||
    obj === undefined ||
    typeof obj !== "object" ||
    Array.isArray(obj)
  ) {
    throw new TypeError(`Expected an object, but got ${obj}`);
  }
  return Object.hasOwn(obj, String(key));
}

module.exports = contains;
