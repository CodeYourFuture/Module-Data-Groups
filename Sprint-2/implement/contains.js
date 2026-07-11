function contains(obj, prop) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  return obj.hasOwnProperty(prop);
}
module.exports = contains;
