
function contains(object, property) {
  if (
    object === null ||
    typeof object !== "object" ||
    Array.isArray(object)
  ) {
     
    return false;
  }

  return Object.prototype.hasOwnProperty.call(object, property);
}
module.exports = contains;