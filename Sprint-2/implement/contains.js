function contains(obj, property) {
   for (element in obj){
    if (element === property){
        return true    
    }
   else return false
   
   }
   if (Object.keys(obj).length === 0){
      return false
   }
}

console.log(contains({}, 'f'))
module.exports = contains;
