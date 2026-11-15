function contains(obj, propertyName) {
  if (Object.keys(obj).length === 0) {
    return false;
  }
  return Object.keys(obj).includes(propertyName);
}
module.exports = contains;
