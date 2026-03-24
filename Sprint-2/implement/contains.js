function contains(obj, prop) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  if (typeof prop !== "string") {
    return false;
  }

  if (Array.isArray(obj)) {
    return false;
  }
  return obj.hasOwnProperty(prop);
}


module.exports = contains;
