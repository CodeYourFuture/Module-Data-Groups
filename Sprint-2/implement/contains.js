function contains(input, propertyName) {

    if (input !== null && typeof input === "object" && !Array.isArray(input)) {
    return Object.prototype.hasOwnProperty.call(input, propertyName);
  }

  return false;
}

module.exports = contains;
