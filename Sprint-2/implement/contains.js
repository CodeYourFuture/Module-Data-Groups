function contains(obj, propertyName) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new TypeError("Invalid input: obj must be a plain object");
  }

  return obj.hasOwnProperty(propertyName);
}

module.exports = contains;
