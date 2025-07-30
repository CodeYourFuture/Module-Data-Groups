function contains(obj, property) {
  // check if it is an Array
  if (typeof obj !== "object" || obj === null || Array.isArray(obj) || obj === undefined ) {
    return false;
  }
  for (let key in obj) {
    if (key === property) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
