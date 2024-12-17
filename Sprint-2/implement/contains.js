function contains(object, property) {
  for (const key of Object.keys(object)) {
    if (key === property) return true;
  }
  return false;
}

module.exports = contains;
