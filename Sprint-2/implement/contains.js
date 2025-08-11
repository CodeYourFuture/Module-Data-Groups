function contains(obj, property) {
    // check if object is null or an array
    if(obj === null || Array.isArray(obj)){
        return false;
    }

    return Object.prototype.hasOwnProperty.call(obj,property);
}

module.exports = contains;

console.log(contains([true, "Mike", 35, "City"], "Mike"));