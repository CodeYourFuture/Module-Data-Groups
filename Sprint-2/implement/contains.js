function contains(object, property) {
  for (const key in object) {
    if (object[key] === property) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
