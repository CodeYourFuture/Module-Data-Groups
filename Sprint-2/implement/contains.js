function contains(obj, key) {
    // check if "obj" is an object and not an array and we are working with plain objects
    if (typeof obj !== "object" || Array.isArray(obj)) return false;

    return false; // if no object or key is found return false
}
module.exports = contains;
