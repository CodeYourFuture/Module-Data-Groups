function contains(obj, property) {
   for (element in obj){
    if (element === property){
        return true    
   }else return false
   
   }

}

module.exports = contains;
