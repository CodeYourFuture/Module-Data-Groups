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
    console.log(keyString);
    if (keyProperty === keyString) {
      return true;
    }
  }
  return false;
}
console.log(contains({ a: 2, b: 1 }, "a"));

module.exports = contains;
