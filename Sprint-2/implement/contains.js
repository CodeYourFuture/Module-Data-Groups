function contains(arr, item) {
  /**
   * Checks if the given array contains the specified value.
   * @param {Array} arr - The array to check.
   * @param {*} item - The item to search for.
   * @returns {boolean} - Returns true if the value is found, otherwise false.
   */
  if (!Array.isArray(arr)) return false;
  return arr.includes(item);
}

module.exports = contains;
