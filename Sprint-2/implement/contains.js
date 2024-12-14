function contains(object, property) {
  if (typeof object === 'object' && !Array.isArray(object) && object !== null && object.hasOwnProperty(property)) return true;

  return false;
}

module.exports = contains;
