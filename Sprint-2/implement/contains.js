function contains(list, prop) {
  if (typeof list !== "object" || list === null || Array.isArray(list))
    return false;
  if (list[prop] == null) return false;
  return true;
}

module.exports = contains;
