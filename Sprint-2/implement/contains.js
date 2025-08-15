function contains(object, key) {
  if (Array.isArray(object) && key === "length") {
    return false;
  }

  return object.hasOwnProperty(key);
}

module.exports = contains;
