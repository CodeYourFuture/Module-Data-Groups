function contains(object, property) {
    try {
        if (object.hasOwnProperty(property)) {
            return true;
        }
    } catch (error) {
        console.error("invalid input");
    }
    return false;
}

module.exports = contains;
