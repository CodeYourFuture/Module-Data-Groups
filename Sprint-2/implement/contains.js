function contains(object, properityValue){ 
    if (typeof object !== 'object' || object === null || Array.isArray(object)) {
        return false;
    }   
    
    return properityValue in object;
    
}
module.exports = contains;
