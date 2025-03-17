function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

function contains(obj, property) {
  if (!isPlainObject(obj)) {
    return false;
  }
  const objKeys = Object.keys(obj); // holds keys of obj
  if (objKeys.length === 0) {
    return false;
  }

  for (let key in obj) {
    if (key === property) {
      return true;
    }
  }

  return false;
}

module.exports = contains;
