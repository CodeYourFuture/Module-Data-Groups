function contains(obj, val) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }
  return Object.keys(obj).includes(val);
}

module.exports = contains;
