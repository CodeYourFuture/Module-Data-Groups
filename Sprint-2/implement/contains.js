
function contains(obj, key) {
    if (typeof obj !== "object" || obj === null) {
        return false;
    }
    return key in obj;
}

module.exports = contains;
