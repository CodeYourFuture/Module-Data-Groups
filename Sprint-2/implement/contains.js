function contains(obj, property) {
    if (typeof obj !== 'object' || Array.isArray(obj) || typeof property !== 'string'){
        return false;
    }
    return Object.hasOwn(obj, property);
}

module.exports = contains;
