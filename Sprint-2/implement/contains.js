function contains(object, property) {
  if (!(
    typeof object === "object" &&
    !Array.isArray(object) &&
    object !== null
  )) {
    throw new Error("Invalid data type");
  }
  const obj = Object.keys(object);
  if (obj.length === 0) {
    return false;
  }
  return obj.includes(property);
}
module.exports = contains;
