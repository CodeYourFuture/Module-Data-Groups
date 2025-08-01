function contains(obj,prop) {

  if(obj===null || obj=== undefined) return false;
  //it checks if the key part of the object's property includes the second parameter
  if (Object.hasOwn(obj,prop)) {
    return true;
  }
  return false;
}

module.exports = contains;

