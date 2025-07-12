function contains(object, property) {
    if (typeof object !== "object" || object == null || Array.isArray(object)) {
        return false;
    }

        return object.hasOwnProperty(property); 
    }
    


module.exports = contains;
