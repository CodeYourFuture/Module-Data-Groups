function contains(obj, property) {

    if(obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
        return false
    } 
    return Object.hasOwn(obj, property);
}

module.exports = contains; 
// work done.