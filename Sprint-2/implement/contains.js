function contains(obj,prop) {

  //it checks if the key part of the object's property includes the second parameter
  if (Object.hasOwn(obj,prop)) {
    return true;
  }
  return false;
}

module.exports = contains;
