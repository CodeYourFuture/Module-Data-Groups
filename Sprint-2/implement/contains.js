function contains(obj, propertyName) {
  if (Array.isArray(obj)) {
    throw new Error("contains requires an object");
  }
  if (typeof obj === "string") {
    throw new Error("contains requires an object");
  }
  if (typeof obj === "number") {
    throw new Error("contains requires an object");
  }
  if (obj === null) {
    throw new Error("contains requires an object");
  }
  if (obj === undefined) {
    throw new Error("contains requires an object");
  }
  if (Object.keys(obj).length === 0) {
    return false;
  }

  return Object.keys(obj).includes(propertyName);
}
module.exports = contains;
