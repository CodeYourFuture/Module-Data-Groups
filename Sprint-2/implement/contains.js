function contains(dic , char) {
    let keys = Object.keys(dic);
    if(typeof dic != "object"){
        return false;
    }
    if(Object.keys(dic).length == 0){
        return false;
    }
    if(keys.includes(char)){
        return true;
    }
    if(!keys.includes(char)){
        return false;
    }
};

module.exports = contains;

