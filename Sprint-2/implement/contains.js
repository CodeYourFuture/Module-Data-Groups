function contains(object, key) {
    if (typeof object !== "object") {
        return false;
    } else if (object === null) {
        return false;
    } else if (Array.isArray(object)) {
        return false;
    } else {
        if (key in object) {
            return true;
        } else {
            return false;
        }
    }

}


module.exports = contains;
