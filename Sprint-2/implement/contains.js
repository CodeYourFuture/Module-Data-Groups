function contains(obj, key) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("Input must not be an array");
  }
  return key in obj;
}

module.exports = contains;
