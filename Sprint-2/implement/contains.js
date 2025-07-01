function contains(obj, key) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)){
        throw new Error("Invalid input");
    }

    return Object.hasOwn(obj, key); 
}

module.exports = contains;
