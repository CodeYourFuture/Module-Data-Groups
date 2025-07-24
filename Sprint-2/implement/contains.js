function contains(obj, property) {
  //return false or throw error if parameters are invalid
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    return false;
  }
  //check that the obj contains a property, and the property is not inherited.
  //N:B Object.hasOwn() strictly check for own properties and not inherited ones.
  if (Object.hasOwn(obj, property)) {
    return true;
  } else {
    return false;
  }
}

module.exports = contains;
