function contains(input, propertyName) {
  const result = Object.hasOwn(input, propertyName);
  return result;
}

module.exports = contains;
