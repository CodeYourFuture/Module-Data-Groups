function contains(obj, property) {
  if (Object.prototype.toString.call(obj) !== "[object Object]") return false;

  return Object.hasOwn(obj, property);
}

console.log(contains(undefined, "key1"));

module.exports = contains;
