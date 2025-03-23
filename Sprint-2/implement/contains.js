function contains(obj, property) {
    //!obj checks if obj is null or undefined (since both null and undefined are falsy).
    if (!obj || typeof obj !== 'object' || Array.isArray(obj) || typeof property !== 'string'){
        return false;
    }
    return Object.hasOwn(obj, property);
}

module.exports = contains;
