function contains(object, property) {
  for (let key in object) {
    if (key === property) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
