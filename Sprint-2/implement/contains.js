function contains(obj, property) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)){
        return false;
    }

    return Object.hasOwn(obj, property);
}


module.exports = contains;
