function contains(obj, key) {
  if (Array.isArray(obj)) {
    return false;
  }
  return Object.hasOwn(obj, key);
}

console.log(contains([1, 2, 3, 4], "0"));
module.exports = contains;
