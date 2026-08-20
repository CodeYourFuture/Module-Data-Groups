function contains(obj, item) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)){
        return false;
    }
    let getKey = Object.keys(obj);
    for (let element of getKey){
        if(element === item){
            return true
        }
    }
    return false;
}

module.exports = contains;
