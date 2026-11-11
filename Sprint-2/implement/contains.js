function contains(object, property) {
    if (!Array.isArray(object)) {
        toThrow new Error("contains requires an object")
    }
    
};

module.exports = contains;
