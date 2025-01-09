function contains(obj, property) {
    // check if it is an Array
    if (Array.isArray(obj)){
        return false
    }  
    for (let key in obj) {
         if (key === property){
            return true
        }
     }
    return false
}

module.exports = contains;
