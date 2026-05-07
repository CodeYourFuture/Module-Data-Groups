function contains(object, key) {
  if (object === null || typeof object !== "object" || Array.isArray(object)) {
    return false;
  }

  if (Object.keys(object).length === 0) {
    return false;
  }

  for (const item in object) {
    if (item === key) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
