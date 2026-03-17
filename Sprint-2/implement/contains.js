function contains(object, name) {
  if (object == null || Object.keys(object).length === 0) {
    return false;
  }

  for (let key in object) {
    if (key === name) {
      return true;
    }
  }

  return false;
}

module.exports = contains;
