function contains(obj,prop) {
//it checks if the key part of the object's property includes the second parameter
    if(Object.keys(obj).includes(prop)){
        return true
    } else {
        return false}

}

module.exports = contains;
