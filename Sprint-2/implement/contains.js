function contains(obj, property) {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error("First argument must be an object.");
  }
  return property in obj;
}

module.exports = contains;