function contains(obj, key) {
  for (const currentKey of Object.keys(obj)) {
    if (currentKey === key) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
