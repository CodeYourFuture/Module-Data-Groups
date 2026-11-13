function contains(obj, property) {

    if (Array.isArray(obj) || typeof obj === "string" || typeof obj === "number" || !obj){
        throw new Error("contains requires an object");
    }

    return property in obj;
}

module.exports = contains;
