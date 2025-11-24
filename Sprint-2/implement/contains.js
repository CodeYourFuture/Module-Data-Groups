function contains(obj, prop) {  
    if (obj !== null && typeof obj === 'object' && !Array.isArray(obj)) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    return false;   
}

module.exports = contains;
