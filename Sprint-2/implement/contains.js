function contains(inputObject,inputProperty) {
    if (
      inputObject === null ||
      typeof inputObject !== "object" ||
      Array.isArray(inputObject)
    ) {
      return false;
    }
    return inputObject.hasOwnProperty(inputProperty);
}

module.exports = contains;
