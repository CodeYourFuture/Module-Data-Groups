function contains(object,result) {
    for(const key in object){
        if(key===result){
            return true
        }

    }
     return false
}


module.exports = contains;
