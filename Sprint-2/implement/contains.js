function contains(targetObject, searchTerm) {
  if (
    typeof targetObject !== "object" ||
    Object.keys(targetObject).length === 0 ||
    Array.isArray(targetObject)
  ) {
    return false;
  }

  for (const property in targetObject) {
    if (targetObject[property] === searchTerm || property === searchTerm) {
      return true;
    }
  }
  return false;
}
console.log(contains(["a", "b", "c"], "d"));

module.exports = contains;
