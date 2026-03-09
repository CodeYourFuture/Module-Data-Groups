function contains(obj, x) {
    for (const key in obj) {
        if (Object.hasOwn(obj, key) && key == x) {
            return true
        }
    }
    return false
}

module.exports = contains;

// Object.hasOwn(obj, key)
// This ensures the property belongs directly to the object, not its prototype.