function contains(obj, property) {
    if (typeof obj !== 'object' || obj === null || typeof property !== 'string'){
        return false;
    }
    return property in obj;
}

module.exports = contains;
