function contains(obj, prop) {
  if (Array.isArray(obj) || obj === undefined || obj === null) {
    return false;
  }
  return obj.hasOwnProperty(prop);
}

module.exports = contains;
