function contains(object, propertyName) {
  if (Object.hasOwn(object, propertyName)) {
    return true;
  } else return false;
}

module.exports = contains;
