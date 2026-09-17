// Explanation:

// typeof reports "object" for arrays and for null as well as for real objects,
// so we check those two cases separately and throw for anything that isn't a
// plain object.
// Object.hasOwn(object, key) then tells us whether the object has its own
// property with that name.

function contains(object, key) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    throw new Error("contains requires an object");
  }
  return Object.hasOwn(object, key);
}

module.exports = contains;
