function contains(givenObject, keyString) {
  console.log(givenObject, keyString);
  if (
    typeof givenObject !== "object" ||
    givenObject === null ||
    Array.isArray(givenObject)
  ) {
    return false;
  }
  for (const keyProperty in givenObject) {
    if (keyProperty === keyString) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
