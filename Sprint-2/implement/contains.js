function contains(obj, propertyName) {
  if (Array.isArray(obj)) {
    throw new Error("contains requires an object");
  }
  if (Object.keys(obj).length === 0) {
    return false;
  }
  return Object.keys(obj).includes(propertyName);
}
module.exports = contains;
