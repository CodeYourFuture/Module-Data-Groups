function contains(obj, targetKey) {
  if (obj.constructor !== Object) {
    throw new Error("Invalid Parameter");
  }
  return Object.keys(obj).includes(targetKey);
}

module.exports = contains;
