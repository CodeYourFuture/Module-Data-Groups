function contains(targetObject, searchTerm) {
  if (
    typeof targetObject !== "object" ||
    targetObject === null ||
    Array.isArray(targetObject)
  ) {
    return false;
  }
  return Object.hasOwn(targetObject, searchTerm);
}
module.exports = contains;
