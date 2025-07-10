function contains() {
    // Check if the first argument is an object
    if (typeof arguments[0] !== 'object' || arguments[0] === null) {
        return false; // Not an object or null
    }
    
    // Check if the second argument is a string (property name)
    if (typeof arguments[1] !== 'string') {
        return false; // Not a valid property name
    }
    // check if contains an array
    if (Array.isArray(arguments[0])) {
        return false; // Arrays are not considered objects for this purpose

    }

    // Use the in operator to check if the property exists in the object
    return arguments[1] in arguments[0];
}

module.exports = contains;
