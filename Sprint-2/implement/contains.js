function contains(obj, property) {
  if (obj == null || typeof obj !== "object" || Array.isArray(obj)) {
    
    throw new TypeError("Invalid parameters");
  }

  const keys = Object.keys(obj);
  for (const key of keys) {
    if (key === property) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
