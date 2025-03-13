function contains() {}
function contains(obj, property) {
    // check if it is an Array
    if (typeof obj !== "object" || obj === null ||Array.isArray(obj)) {
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

// we are checking if 'value' exist in an 'arr' array,so that the function can be exported in other files.