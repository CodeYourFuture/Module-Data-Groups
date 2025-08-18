function contains(obj, propName) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return false;
    }
    return propName in obj;
}

module.exports = contains;
