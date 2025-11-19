function contains(arr, value) {
  /**
   * Checks if the given array contains the specified value.
   * @param {Array} arr - The array to check.
   * @param {*} value - The value to search for.
   * @returns {boolean} - Returns true if the value is found, otherwise false.
   */
  if (!Array.isArray(arr)) return false;
  return arr.includes(value);
}

module.exports = contains;
