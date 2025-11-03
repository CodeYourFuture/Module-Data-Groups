function contains(obj, property) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Parameter is not an object literal");
  }
  if (Object.keys(obj).length === 0) {
    return false;
  }

  if (property in obj) {
    return true;
  }

  return false;
}

module.exports = contains;
