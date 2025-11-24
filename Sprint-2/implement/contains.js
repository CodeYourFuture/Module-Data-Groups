function contains(obj, property) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Parameter is not an object literal");
  }

  if (property in obj) {
    return true;
  }

  return false;
}

module.exports = contains;
