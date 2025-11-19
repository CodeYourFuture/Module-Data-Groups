function contains(object, propertyValue){ 
    if (typeof object !== 'object' || object === null || Array.isArray(object)) {
        return false;
    }   
    
   return Object.hasOwn(object, propertyValue);
    
}
module.exports = contains;
