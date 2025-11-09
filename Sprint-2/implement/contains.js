function contains(object, property) {
   if (Object.keys(object).length === 0 ){
    return false;
   } 
   if (object.hasOwnProperty(property)){
    return true;
   }
   else{
    return false;
   }
   
}

module.exports = contains;

