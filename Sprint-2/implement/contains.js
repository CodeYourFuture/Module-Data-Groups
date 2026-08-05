function contains(object, target) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    return false;
  }
  return Object.hasOwn(object, target);
}
module.exports = contains;
