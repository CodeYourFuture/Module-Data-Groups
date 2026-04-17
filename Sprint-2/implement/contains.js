function contains(item, propertyName) {
    // Guard clause for non-objects, null, and arrays
    if (item === null || typeof item !== "object" || Array.isArray(item)) {
        return false;
    }

    // Object.hasOwn is safer because it ignores inherited prototype properties
    return Object.hasOwn(item, propertyName);
}

module.exports = contains;