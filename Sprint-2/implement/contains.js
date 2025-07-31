function contains(obj, target) {
  const objValue = Object.keys(obj);
  if (Object.keys(obj).length === 0 && obj.constructor === Object) return false;

  return objValue.includes(target);
}

module.exports = contains;
