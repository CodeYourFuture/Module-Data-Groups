function contains(object, key) {
    if (typeof object !== "object" || object === null || Array.isArray(object)) {
        return false;
    }
    return key in object;
}

module.exports = contains;


