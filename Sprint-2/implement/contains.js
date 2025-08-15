function contains(obj, key) {
  if (Array.isArray(obj) && key === "length") {
    return false;
  }
  return Object.hasOwn(obj, key);
}

console.log(contains([1, 2, 3, 4], "length"));
module.exports = contains;
