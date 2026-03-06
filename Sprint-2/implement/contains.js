function contains(object, property) {
    if (typeof object === 'object' && false === Array.isArray(object)) {
        return object.hasOwnProperty(property);
    }
    else throw new Error("Not an object");
}
module.exports = contains;