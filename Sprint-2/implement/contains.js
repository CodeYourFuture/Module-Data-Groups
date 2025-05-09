function contains(obj, key) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    // handling null / checking if obj is an object / exclude arrays
    return false;
  }

  return obj.hasOwnProperty(key);
  // "in" checks whether the key in the obj
  // in will return true if key gets found somewhere in the prototype chain
  // Object.hasOwnProperty will only return true if key is available on that object directly (its "owns" the property)
}
console.log(contains({ a: 1, b: 2 }, "a"));
console.log(contains({ a: 1, b: 2 }, "c"));

module.exports = contains;