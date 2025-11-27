function contains(obj, propertyName) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  return obj.hasOwnProperty(propertyName);
}

module.exports = contains;
