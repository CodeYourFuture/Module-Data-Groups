function contains(object, property) {
  if (!(
    typeof object === "object" &&
    !Array.isArray(object) &&
    object !== null
  )) {
    throw new Error("Invalid data type");
  }
  return Object.hasOwn(object, property);
}
module.exports = contains;
