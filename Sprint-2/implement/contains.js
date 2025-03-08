function contains(object, key) {
    if (object && typeof object === 'object' && !Array.isArray(object)) {
        return key in object;
    }
    return false; // Return false for invalid parameters
}

module.exports = contains;

