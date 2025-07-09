function contains(obj, property) {

    if(obj === null || obj === undefined){
        return false
    } 
    return obj[property] !== undefined;
}

module.exports = contains; 
// work done.
