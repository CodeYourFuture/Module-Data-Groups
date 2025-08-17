function contains(obj, property) {

    if(obj === null || obj === undefined){
        return false
    } 
    return Object.hasOwn(obj, property);
}

module.exports = contains; 
// work done.