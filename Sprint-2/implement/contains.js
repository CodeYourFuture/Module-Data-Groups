function contains(obj, prop) {
    if(typeof obj !== "object"|| obj === null || Array.isArray(obj)){
        throw new Error("Invalid input: Expected an object");
    }
    return obj.hasOwnProperty(prop);
}

module.exports = contains;
