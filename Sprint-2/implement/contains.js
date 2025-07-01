function contains(obj, key) {
  if (obj && typeof obj === "object") {
    return key in obj;
  }
  return false;
}

module.exports = contains;
