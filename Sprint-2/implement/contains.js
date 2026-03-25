function contains(object, propertyName) {
if (
    typeof object !== "object" || 
    object === null ||
    Array.isArray(object)) {
    return false;
    }
    return propertyName in object;
}
module.exports = contains;
