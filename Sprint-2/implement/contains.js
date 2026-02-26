function isObject(item) {
  return typeof item === "object" && item !== null && !Array.isArray(item);
}

function contains(object, key) {
  if (isObject(object)) {
    return Object.keys(object).includes(key);
  }
  throw new TypeError("Item is not plain object, Date, or Map");
}

module.exports = contains;
