function contains(obj, property) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("contains requires an object");
  }
  for (const key of Object.keys(obj)) {
    if (key === property) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
