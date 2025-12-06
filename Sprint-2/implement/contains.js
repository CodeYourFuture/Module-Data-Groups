function contains() {function contains(obj, key) {
  // First, check if obj is a real object
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
  }

  // Use hasOwnProperty to check if the key exists
  return obj.hasOwnProperty(key);
}

module.exports = contains;
}

module.exports = contains;
