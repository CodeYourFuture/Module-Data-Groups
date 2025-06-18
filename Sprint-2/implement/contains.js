function contains(obj,str) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return false;
    return Object.keys(obj).includes(str)
}

module.exports = contains;
