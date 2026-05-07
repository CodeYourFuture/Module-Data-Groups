function isObject(item) {
  return (
    typeof item === "object" &&
    item !== null &&
    !Array.isArray(item) &&
    !(item instanceof Date) &&
    !(item instanceof Map)
  );
}

function contains(object, key) {
  if (isObject(object)) {
    return key in object;
  }
  throw new TypeError("Exepected a plain object");
}

module.exports = contains;
