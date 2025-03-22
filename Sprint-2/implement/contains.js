

function contains(obj, prop) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return false; 
    }
    return obj.hasOwnProperty(prop);
}

module.exports = contains;

