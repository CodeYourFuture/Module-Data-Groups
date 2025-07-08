function contains() {
    // Check if the first argument is an object
    if (typeof arguments[0] !== 'object' || arguments[0] === null) {
        return false; // Return false for non-object types
    }

    // If the first argument is an array, return false
    if (Array.isArray(arguments[0])) {
        return false;
    }
    
    // Check if the second argument is a string
    if (typeof arguments[1] !== 'string') {
        return false; // Return false for non-string property names
    }
    
    // Check if the object contains the property
    return Object.prototype.hasOwnProperty.call(arguments[0], arguments[1]);
}

module.exports = contains;
