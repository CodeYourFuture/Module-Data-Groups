function contains(object, key) {
  if (Object.keys(object).length === 0) {
    return false;
  }

  for (const checkItem in object){
    let validation = object[checkItem]
     if(Array.isArray(validation)){
      return false;
     }
  }
  for (const item in object) {
    if (item === key) {
      return true;
    }
  }
   return false;
}

module.exports = contains;
