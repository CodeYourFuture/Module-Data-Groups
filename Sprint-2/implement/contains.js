function contains() {
    /**
     * Checks if the given array contains the specified value.
     * @param {Array} arr - The array to check.
     * @param {*} value - The value to search for.
     * @returns {boolean} - Returns true if the value is found, otherwise false.
     */
    return function(arr, value) {
        if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
        }
        return arr.includes(value);
    };
}

module.exports = contains;
