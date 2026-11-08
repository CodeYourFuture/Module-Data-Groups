function contains(objIn, property) {
  if (Object.keys(objIn).length === 0) {
    return false;
  }
  return true;
}

module.exports = contains;
