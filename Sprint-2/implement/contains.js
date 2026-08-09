function contains() {

    // Return false if obj is null, undefined, an array, or not a non-null object
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return false;
    }

    // Check if the property exists directly on the object
    return Object.hasOwn(obj, prop);
  
}

module.exports = contains;
