function contains(obj,prop) {
  //return false if the parameter is not an object
  if (typeof obj != "object") return false;
  //if the object has no keys , returns false
  if (Object.keys(obj).length === 0) return false;
  //it checks if the key part of the object's property includes the second parameter
  if (Object.keys(obj).includes(prop)) {
    return true;
  }
  return false;
}

module.exports = contains;
