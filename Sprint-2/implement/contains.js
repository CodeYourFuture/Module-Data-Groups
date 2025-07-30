
function contains(object, property) {
  if (
    object === null ||
    typeof object !== "object" ||
    Array.isArray(object)
  ) {
     
    return false;
  }

  return Object.hasOwn(object, property);
}
module.exports = contains;