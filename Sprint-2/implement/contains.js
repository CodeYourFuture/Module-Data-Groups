function contains(obj, property) {
    // Check if obj is an object and not null, and property is a valid string
    if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
        return false;
    }
    
    // Check if the object has the property as its own property
    return obj.hasOwnProperty(property);
}

module.exports = contains;
