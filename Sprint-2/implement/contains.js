function contains(obj, key) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {//check if we have an object and makes sure it's not an array
    return false;
  }
  if (Object.keys(obj).length === 0) {
    return false;
  }
  return key in obj;
}

module.exports = contains;
