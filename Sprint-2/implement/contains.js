function contains(obj, propertyName) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("First argument must be a plain object");
  }
  if (Object.keys(obj).length === 0) {
    return false;
  }
  return obj.hasOwnProperty(propertyName);
}

console.log(contains(null, "key"));

module.exports = contains;
