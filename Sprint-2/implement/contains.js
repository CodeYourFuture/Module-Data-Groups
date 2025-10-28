function contains(obj, key) {
  /**
   * Checks if the given array contains the specified value.
   * @param {Array} arr - The array to check.
   * @param {*} value - The value to search for.
   * @returns {boolean} - Returns true if the value is found, otherwise false.
   */
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("First argument must be a non-null object");
  }

  return Object.prototype.hasOwnProperty.call(obj, key);
}

module.exports = contains;
