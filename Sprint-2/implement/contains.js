function contains(obj,str) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return false;
    return obj.hasOwnProperty(str);
}

module.exports = contains;
