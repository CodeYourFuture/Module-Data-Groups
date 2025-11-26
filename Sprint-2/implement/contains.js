function contains(input, propertyName) {
    if (input && typeof input === 'object' && !Array.isArray(input)) {
        return input.hasOwnProperty(propertyName);
    }
    return false;
};

module.exports = contains;
