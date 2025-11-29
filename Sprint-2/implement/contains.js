function contains(obj, key) {
  // check if "obj" is an object and not an array and we are working with plain objects
  if (typeof obj !== "object" || obj === null || Array.isArray(obj))
    return false;

  // loop over each property name in the object
  for (let properties in obj) {
    // check that if each of the properties names matches what were looking for in the key and return true if matches
    if (properties === key) return true;
  }

  return false; // if no object or key is found return false
}
module.exports = contains;
