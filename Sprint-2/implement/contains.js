function contains(obj, property) { 
    try {
        return Object.hasOwn(obj, property);
    }
    catch(e ){
        console.log(e);
        return false;
    } 
}

module.exports = contains;
