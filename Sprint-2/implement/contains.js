function contains(obj, property) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Parameter is not an object literal");
  }

  return property in obj;
}

module.exports = contains;
