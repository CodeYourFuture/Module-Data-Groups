function contains(object, property) {    
    if (Object.keys(object).length === 0) {
        return false;
    } else if(typeof object !== "object" || object === null) {
        return false;
    }
    for (const key in object) {
        if (key === property) {
            return true;
        } 
        return false;
    }
}

module.exports = contains;
