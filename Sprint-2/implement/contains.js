function contains(obj, key) {
if (typeof obj !== 'object' || obj === null) {
        throw new Error('Invalid input: must be an object');
    }
    
    if (Array.isArray(obj)) {
        return false;
    }
    
    if (typeof key !== 'string') {
        return false;
    }
    

    return obj.hasOwnProperty(key);
}


module.exports = contains;
