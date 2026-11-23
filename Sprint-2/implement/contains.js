function contains(target, propertyName) {
  if (
    target === null ||
    typeof target !== "object" ||
    Array.isArray(target)
  ) {
    throw new Error("contains requires an object");
  }

  return Object.hasOwn(target, propertyName);
}

module.exports = contains;