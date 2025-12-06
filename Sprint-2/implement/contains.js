function contains(obj, property) {
  if (obj === null || obj === undefined) {
    return false;
  }

  return property in obj;
}

module.exports = contains;
