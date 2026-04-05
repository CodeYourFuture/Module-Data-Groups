function contains(obj, targetKey) {
  if (obj.constructor !== Object) {
    throw new Error("Invalid Parameter");
  }
  return Object.hasOwn(obj, targetKey);
}

module.exports = contains;
