function contains(obj, propertyName) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("First argument must be a plain object");
  }
  if (Object.keys(obj).length === 0) {
    return false;
  }
  return obj.hasOwnProperty(propertyName);
}

console.log(contains({ a: 2 }, "a"));

module.exports = contains;
