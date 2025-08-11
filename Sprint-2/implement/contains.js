function contains(obj, prop) {                                             // Takes two parameters: the 'object' to check and name of 'property' to look for
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {   // Checks if 'obj' is not an object or is null
        return false;                                                      // Return false for invalid inputs like number, string or undefined.
    }

    return obj.hasOwnProperty(prop);                                       // Using 'hasOwnProperty' method to check if the object contains the property specified by 'prop' and returns 'true' if the property exists.
}

module.exports = contains;
