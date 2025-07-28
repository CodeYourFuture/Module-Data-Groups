function contains(obj, key) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    Object.keys(obj).length === 0
  ) {
    return false;
  }
  for (let keyInObj in obj) {
    if (keyInObj === key) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
