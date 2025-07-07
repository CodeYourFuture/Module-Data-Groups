function contains(object, property) {
    if (typeof object !== "object" || object == null || Array.isArray(object)) {
        return false;
    }
    if (Object.keys(object).length === 0) {
        return false;
    } else {
        return object.hasOwnProperty(property); 
    }
    

}

module.exports = contains;
