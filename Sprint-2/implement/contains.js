function contains(object, key) {
    if (typeof object !== "object" || object === null || Array.isArray(object)) {
        throw new Error("Invalid input: expected an object");
    } 
    return object.hasOwnProperty(key);
}

module.exports = contains;
