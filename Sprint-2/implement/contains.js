function contains(testObject, keyword) {
  if (
    typeof testObject === "object" &&
    testObject !== null &&
    Array.isArray(testObject) === false
  ) {
    return Object.hasOwn(testObject, keyword);
  }
  throw new Error("contains requires an object");
}

module.exports = contains;
