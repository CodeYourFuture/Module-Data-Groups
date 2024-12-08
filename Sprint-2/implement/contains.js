function contains(checkObj, property) {
    if (typeof checkObj !== 'object' || // Not an object
        checkObj === null || // Null is not an object
        Array.isArray(checkObj) // Arrays should be treated as invalid for this case
    ) {
        return false;
    }
    return checkObj.hasOwnProperty(property);
}

module.exports = contains;
