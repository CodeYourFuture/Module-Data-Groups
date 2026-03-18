function contains(obj, property) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)){
        return false;
    }

    return property in obj;
}


module.exports = contains;


