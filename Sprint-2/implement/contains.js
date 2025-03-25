function contains(obj, key) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Invalid input: First parameter must be an object");
  }
  return obj.hasOwnProperty(key);
}

module.exports = contains;
